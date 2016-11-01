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


Route::get('/', function () {
//    View::addExtendsion('html','php');
//    return view('welcome');
    \View::addExtension('html','php');
    return view('HiMatch');
//    return "hello Home page";
});

Route::any('/test',function (){
    return "hello toast !";
});
Route::auth();

Route::get('/home', 'HomeController@index');
