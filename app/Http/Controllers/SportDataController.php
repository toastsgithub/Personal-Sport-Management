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

class SportDataController extends Controller{

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