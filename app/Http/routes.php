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

Route::post('/login','AuthController@user_verify');

Route::post('/register','UserController@create_user');

Route::get('/user/{username}','UserController@get_user_info');

Route::get('/step_data','SportDataController@getStepData');

Route::get('/weight_data','SportDataController@getWeightData');

Route::get('/sleep_data','SportDataController@getSleepData');

Route::get('/height_data','SportDataController@getHeightData');

Route::get('/matchs','MatchController@getAllMatchs');

Route::Post('/match','MatchController@createMatch');

Route::get('/matchs/mine','MatchController@getCreatedMatchByUser');

Route::get('/match/participate','MatchController@getParticipatedMatchsByUser');

Route::post('/match/participate','MatchController@participateMatch');

Route::post('/matchs','MatchController@getAllMatchs');



Route::get('/test',function (){
    \View::addExtension('html','php');
    return view('Test');
});

//Route::auth();
//
//Route::get('/home', 'HomeController@index');
