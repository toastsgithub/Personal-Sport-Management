<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/3/16
 * Time: 11:25 AM
 */
namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use DOMDocument;

class SportDataController extends Controller{

    public function addXMLData(){

        $row_data = new DOMDocument();
        $row_data->load('/Users/duanzhengmou/Desktop/Personal-Sport-Management/database/sport_data.xml');
//return $data->getElementsByTagName('datas')[0]
//            ->getElementsByTagName('data')[0]
//            ->getElementsByTagName('userId')[0]
//            ->nodeValue;


        $result = array();

        $datas = $row_data->getElementsByTagName( "data" );
        foreach( $datas as $data ) {

            $user_id = $data->getElementsByTagName("userId")->item(0)->nodeValue;
            $sport_date = $data->getElementsByTagName("sportDate")->item(0)->nodeValue;
            $sleep_time = $data->getElementsByTagName("sleepTime")->item(0)->nodeValue;
            $weight = $data->getElementsByTagName("weight")->item(0)->nodeValue;
            $height = $data->getElementsByTagName("height")->item(0)->nodeValue;
            $steps = $data->getElementsByTagName("steps")->item(0)->nodeValue;
            $sleep_deep = $data->getElementsByTagName("sleepDeep")->item(0)->nodeValue;

//            DB::table('sport_data')
//                ->insert([
//                    'sport_data'=>
//                    ])
//            ;

            array_push($result,array(
                'user_id'=>$user_id,
                'sport_date'=>$sport_date,
                'sleep_time'=>$sleep_time,
                'weight'=>$weight,
                'height'=>$height,
                'steps'=>$steps,
                'sleep_deep'=>$sleep_deep));
        }

        DB::table('sport_data')
            ->insert($result)
        ;
        return $result;
    }

    public function addData(){
        $sport_date = Input::get('date');
        $steps = Input::get('steps');
        $sleep_time = Input::get('sleep_time');
        $weight = Input::get('weight');
        $height = Input::get('height');
        $deep_sleep = Input::get('sleep_deep');
        $user_id = Input::get('user_id');

        $sport_date = $sport_date ? $sport_date : '2016-01-01';
        $steps = $steps ? $steps : 0;
        $sleep_time = $sleep_time ? $sleep_time : 0;
        $weight = $weight ? $weight : 0;
        $height = $height ? $height : 0;
        $deep_sleep = $deep_sleep ? $deep_sleep : 0;


        $result = DB::table('sport_data')
            ->insert(
                [
                    'sport_date'=>$sport_date,
                    'steps'=>$steps,
                    'sleep_time'=>$sleep_time,
                    'weight'=>$weight,
                    'height'=>$height,
                    'sleep_deep'=>$deep_sleep,
                    'user_id'=>$user_id
                ]
            );

        return array('result'=>$result);
    }

    public function getStepData(){
        $username = Input::get('username');
        $data = DB::table('sport_data')
            ->join('user','user.id','=','sport_data.user_id')
            ->select(
                'sport_date',
                'steps')
            ->where('user_name',$username)
            ->get();

        return $data;
    }

    public function getWeightData(){
        $username = Input::get('username');
        $data = DB::table('sport_data')
            ->join('user','user.id','=','sport_data.user_id')
            ->select(
                'sport_date',
                'weight')
            ->where('user_name',$username)
            ->orderBy('sport_date','asc')
            ->get();

        return $data;
    }

    public function getSleepData(){
        $username = Input::get('username');
        $date = Input::get('date');
        $data = DB::table('sport_data')
            ->join('user','user.id','=','sport_data.user_id')
            ->select(
                'sport_date',
                'sleep_time',
                'sleep_deep')
            ->where('user_name',$username)
            ->where('sport_date',$date)
            ->get();

        return $data;
    }

    public function getHeightData(){
        $username = Input::get('username');
        $data = DB::table('sport_data')
            ->join('user','user.id','=','sport_data.user_id')
            ->select(
                'sport_date',
                'height')
            ->where('user_name',$username)
            ->get();

        return $data;
    }



}