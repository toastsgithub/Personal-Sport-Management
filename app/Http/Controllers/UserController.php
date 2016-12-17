<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/2/16
 * Time: 5:34 PM
 */
namespace App\Http\Controllers;

use \Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

class UserController extends Controller{


    public function create_user(){
        $username = Input::get('username');
        $password = Input::get('password');
        $gender = Input::get('gender');
        $age = Input::get('age');
        $city = Input::get('city');

        $exist = DB::select('select * from "user" WHERE user_name = :u_name',['u_name' => $username]);
        $error_msg = '0 error';
        $error_code = 0;
        if (count($exist) != 0)
        {
            $error_msg = 'account already exist!';
            $error_code = 1;
        }
        else
        {
            DB::table('user')->insert([
                'user_name'=>$username,
            'user_password'=>$password,
            'nickname'=>$username,
            'user_type'=>0,
            'gender'=>$gender,
            'age'=>$age,
            'city'=>$city]);
        }
        $return_data = array('error_code'=>$error_code, 'error_msg'=> $error_msg);
        return $return_data;
    }

    public function get_user_info($username){
//        $username = Input::get('username');
        $data = DB::table('user')
            ->select(
                'user_name as username',
                'nickname',
                'self_intro',
                'user_type',
                'gender',
                'age',
                'city')
            ->where('user_name',$username)
            ->get();
        return $data;
    }

    public function get_personal_info(){
        $user_id = Input::get('user_id');

        $data = DB::table('user')
            ->select(
                'user_name as username',
                'nickname',
                'self_intro',
                'user_type',
                'gender',
                'age',
                'city')
            ->where('id',$user_id)
            ->get();
        return $data;
    }

    /**
     * 获取和传入键值相关的用户,返回用户基本信息和是否已经添加过好友,是(1),否(0)
     * @return mixed
     */
    public function fuzzy_search_by_id(){
        $key = Input::get('key');
        $user_id = Input::get('user_id');

        $condition = '%'.$key.'%';

        $result = array();
        $all_match_user = DB::table('user')
            ->select(
                'user_name',
                'id'
                )
            ->where('user.user_name','like',$condition)
            ->get();

        //获取已经关注过的好友列表
        $followed = DB::table('following')
            ->select('following_id')
            ->where('following.user_id', $user_id)
            ->get();

        for ($x=0;$x<count($all_match_user);$x++){
            $followed_index = 0;
            for ($y=0;$y<count($followed);$y++){
                if ($followed[$y]->following_id == $all_match_user[$x]->id)
                    $followed_index = 1;
            }
            $all_match_user[$x]->followed = $followed_index;
        }
        return $all_match_user;
    }


}
