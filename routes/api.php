<?php

Route::apiResource('user', 'UserController');
Route::apiResource('item', 'ItemController');


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('signup', 'AuthController@signUp');
    Route::post('payload', 'AuthController@payload');


});
