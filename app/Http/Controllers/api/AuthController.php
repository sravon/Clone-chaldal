<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|min:3',
            'email' => 'required|email',
            'number' => 'required|min:11|max:11',
            'gender' => 'required',
            'address' => 'required',
            'password' => 'required|confirmed|min:6'
        ]);

        if($validator->fails()){
            return response($validator->errors()->first(), 201);
        }elseif ($this->checkEmail($request->email)) {
            return response("Email already exists", 201);
        }

        $edu = new User();
        $edu->name = $request->name;
        $edu->email = $request->email;
        $edu->number = $request->number;
        $edu->gender = $request->gender;
        $edu->location = $request->address;
        $edu->password = Hash::make($request->password);
        $edu->save();
        if($edu){
            return response("Registration Succefull", 200);
        }else{
            return response("Registration unSuccefull", 201);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request){
        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();

        if($user){
            if(Hash::check($password, $user->password)){
                $token = $user->createToken('Token one')->accessToken;
                return response([
                    'user'  => $user,
                    'token' => $token
                ], 200);
            }else{
                return response("password not match", 201);
            }
        }else{
            return response("user not found", 201);
        }

    }

    private function checkEmail($email){

        $user = User::where('email',$email)->first();
        if ($user) {
            return true;
        } 
    }

    public function logout(){
        //$token = Auth::user()->token();
        ;
        return response(User::where('email','kay@ymail.com')->first());
    }

    public function loginget(){
        return response("i am man",200);
    }

    public function login_userdata(){
        $user = Auth::user();
        if ($user) {
            return response($user, 200);
        }else {
            return response("User not found", 201);
        }

    }
    

}
