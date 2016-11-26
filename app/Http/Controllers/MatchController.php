<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/3/16
 * Time: 9:53 PM
 */
namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class MatchController extends Controller{

    public function getAllMatchs(){
        $data = DB::table('matchs')
            ->get();

        $participated_match = DB::table('participate_match')
            ->join('user','participate_match.user_id','=','user.id')
//            ->select([
//
//            ])
            ->get();

//        $data = (array)$data;
//        $participated = 1;
//        array_push($data,$participated);
        foreach ($data as $current_obj){
            $par_index = 0;
            foreach ($participated_match as $current){

                if ($current->match_id == $current_obj->id){
                    $par_index = 1;
                    break;
                }
            }
            $current_obj->participated = $par_index;
        }
        return $data;
    }

    public function createMatch(){
        $title = Input::get('match_title');
        $date = Input::get('match_date');
        $description = Input::get('match_description');
        $originator_id = Input::get('originator_id');
        $img_url = Input::get('image_url');
        $location = Input::get('match_location');

        $result = DB::table('matchs')
            ->insert([
                "match_title"=>$title,
                    "match_location"=>$location,
                    "match_date"=>$date,
                    "match_description"=>$description,
                    "originator_id"=>$originator_id,
                    "img_url"=>$img_url
                ]
            );
        $return_data = array('result'=>$result);
        return $return_data;
    }

    public function getCreatedMatchsByUser(){
        $username = Input::get('username');

        $data = DB::table('matchs')
            ->join('user','matchs.originator_id','=','user.id')
            ->select(
                'matchs.id as id',
                'match_title',
                'match_location',
                'match_date',
                'match_description',
                'img_url')
            ->where('user.user_name',$username)
            ->get();

        return $data;
    }

    public function getParticipatedMatchsByUser(){
        $username = Input::get("username");

        $userID = DB::table('user')
            ->select("id")
            ->where("user_name", $username)
        ->get();

//        dd($userID);
        $result = DB::table('participate_match')
            ->join('matchs', 'matchs.id', '=', 'participate_match.match_id')
            ->join('user', 'participate_match.user_id', '=', 'user.id')
            ->select(
                'matchs.id as id',
                'match_title',
                'match_location',
                'match_date',
                'match_description',
                'img_url',
                'originator_id',
                'user.id as userID'
                )
            ->where('user.user_name', $username)
            ->where('matchs.originator_id', '<>', $userID[0]->id)
            ->get();


//        $result = DB::table('participate_match')
//            ->join('matchs', 'matchs.id', '=', 'participate_match.match_id')
//            ->join('user', 'participate_match.user_id', '=', 'user.id')
//            ->get();
//        dd($result);
        return $result;
    }

    public function participateMatch(){
        $user_id = Input::get('user_id');
        $match_id = Input::get('match_id');
        $result = DB::table('participate_match')
            ->insert([
                "match_id"=>$match_id,
                "user_id"=>$user_id
            ]);
        return array('result'=>$result);
    }

    public function getMatchInfoById(){
        $match_id = Input::get('match_id');
        $result = DB::table('matchs')
            ->where('id', $match_id)
            ->get();
        return $result;
    }


}