<?php
/**
 * Created by PhpStorm.
 * User: duanzhengmou
 * Date: 11/2/16
 * Time: 10:21 AM
 */
namespace App\Http\Controllers;
use \Illuminate\Routing\Controller;
use \Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller{

    public function user_verify(){

//        Input::get('user_name');

        $username = Input::get('username');
        $password = Input::get('password');
        $valid_user = 0;
        $result = DB::table('user')
            ->select(
                'id',
                'user_name as username',
                'nickname',
                'user_type',
                'gender',
                'age',
                'city')
            ->where('user_password',$password)
            ->where('user_name',$username)
            ->get();
        if(count($result) == 0){
            $valid_user = 0;
        }else{
            $valid_user = 1;
        }

        $return_value = array('result'=> $valid_user, 'user'=>$result[0]);
        return $return_value;
    }

}