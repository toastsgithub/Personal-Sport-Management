<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use Illuminate\Support\Facades\DB;

Route::get('/',function (){

   return redirect('sport_data_page');
});

Route::get('/sport_data_page', function () {
    \View::addExtension('html','php');
    return view('HomePage');
});

Route::get('/matchs_page', function () {
    \View::addExtension('html','php');
    return view('HiMatch');
});

Route::get('/friend_page', function () {
    \View::addExtension('html','php');
    return view('HiFriend');
});

Route::get('/login',function (){
    \View::addExtension('html','php');
    return view('login');
});

Route::get('/personal',function (){
    \View::addExtension('html','php');
    return view('PersonalSetting');
});

Route::get('/admin',function (){
    \View::addExtension('html','php');
    return view('Admin');
});

Route::post('/import','SportDataController@addData');
Route::post('/importXML','SportDataController@addXMLData');

Route::post('/login','AuthController@user_verify');

Route::post('/register','UserController@create_user');

Route::get('/user/{username}','UserController@get_user_info');

Route::get('/step_data','SportDataController@getStepData');

Route::get('/weight_data','SportDataController@getWeightData');

Route::get('/sleep_data','SportDataController@getSleepData');

Route::get('/height_data','SportDataController@getHeightData');

Route::get('/matchs','MatchController@getAllMatchs');

Route::Post('/match','MatchController@createMatch');

Route::get('/match/mine','MatchController@getCreatedMatchsByUser');

Route::get('/match/participate','MatchController@getParticipatedMatchsByUser');

Route::post('/match/participate','MatchController@participateMatch');

Route::get('/match/info','MatchController@getMatchInfoById');

Route::post('/match/dismiss','MatchController@dismissMatch');

Route::post('/match/report','MatchController@report');

Route::get('/match/report','MatchController@getReport');

Route::post('/match/pass','MatchController@resetReport');


Route::get('/friend/search','UserController@fuzzy_search_by_id');

Route::get('/friend/following','FriendController@getFollowingUser');

Route::get('/friend/follower','FriendController@getFollowerUser');

Route::post('/friend/follow','FriendController@followUser');

Route::post('/friend/unfollow','FriendController@unFollowUser');

Route::get('/friend/moments','FriendController@getMomentsById');

Route::post('/friend/moments','FriendController@publicMoment');

Route::get('/personal/info','UserController@get_personal_info');

Route::post('/personal/info','UserController@set_personal_info');



Route::get('testDB',function (){

    $name =  'zhengmou';
    $result = 'duan' + $name;
    echo $result;
//    return $result;
});

Route::get('/test',function (){
    \View::addExtension('html','php');
    return view('Test');
});

//Route::auth();
//
//Route::get('/home', 'HomeController@index');
