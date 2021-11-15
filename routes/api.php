<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users/gettery', [AuthController::class, 'loginget']);

Route::resource('users',AuthController::class);
Route::post('users/checkemail', [AuthController::class,'checkEmail']);
Route::post('users/login', [AuthController::class, 'login']);


Route::group(['middleware'=> 'auth:api'], function(){
    Route::get('users/logout',[AuthController::class, 'logout' ]); // header a token
    //Route::get('users/login_userdata',[AuthController::class, 'login_userdata' ]);
});


