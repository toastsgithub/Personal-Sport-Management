<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/28/16
 * Time: 9:46 AM
 */

namespace App\Http\Controllers;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;


class FriendController extends Controller{

    public function getFollowingUser(){
        $userid = Input::get('userid');

        $result = DB::table('following')
            ->join('user','following.following_id','=','user.id')
            ->select(
                'user_name',
                'user.id as id',
                'self_intro',
                'nickname',
                'gender',
                'age',
                'city')
            ->where('following.user_id',$userid)
            ->get();

        return $result;
    }

    public function getFollowerUser(){
        $userid = Input::get('userid');

        $result = DB::table('following')
            ->join('user','following.user_id','=','user.id')
            ->select(
                'user_name',
                'user.id as id',
                'self_intro',
                'nickname',
                'gender',
                'age',
                'city')
            ->where('following.following_id',$userid)
            ->distinct()
            ->get();

//        return json_encode($result[0]);
        return $result;
    }

    public function followUser(){
        $user_id = Input::get('user_id');
        $following_id = Input::get('following_id');

        $result = DB::table('following')
            ->insert(
                [
                    'user_id'=>$user_id,
                    'following_id'=>$following_id
                ]
            );

        return array('result'=>$result);
    }

    public function unFollowUser(){
        $user_id = Input::get('user_id');
        $following_id = Input::get('friend_id');

//        return array('user'=>$user_id, 'friend'=>$following_id);
        $result = DB::table('following')
            ->where('user_id',$user_id)
            ->where('following_id',$following_id)
//            ->get();
            ->delete();
        return array('result'=>$result);
    }

    /**
     * 根据当前用户id获取该用户关注的用户的动态 和  自己的动态
     * 返回数据按时间顺序排列
     * @param user_id 当前用户id
     * @return result
     */
    public function getMomentsById(){
        $user_id = Input::get('user_id');
        $user_name = Input::get('user_name');

        $result = array();

        $following = DB::table('following')
            ->join('user','following.following_id','=','user.id')
            ->select(
                'user_name',
                'user.id as id'
                )
            ->where('following.user_id',$user_id)
            ->get();

        $moments = DB::table('moments')
            ->orderBy('create_at','desc')
            ->get();

        foreach ($moments as $m){
            foreach ($following as $fl){
                if($m->user_id == $fl->id){
                    $m->user_name = $fl->user_name;
                    array_push($result,$m);
                }
            }
            if ($m->user_id == $user_id){
                $m->user_name = $user_name;
                array_push($result,$m);
            }
        }

//        foreach ($moments as $m){
//            if($m->user_id == $user_id){
//                $m->user_name = $user_name;
//                array_push($result,$m);
//            }
//        }
        return $result;
    }

    /**
     * 发布动态
     */
    public function publicMoment(){
        $user_id = Input::get('user_id');
        $content = Input::get('content');
        date_default_timezone_set("Asia/Shanghai");
        $time = date('Y-m-d H:i:s');

        $result = DB::table('moments')
            ->insert(
                [
                    'user_id'=>$user_id,
                    'create_at'=>$time,
                    'content'=>$content
                ]
            );
        ;
        return array('result'=>$result);
    }
}