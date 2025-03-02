<?php

namespace App\Http\Controllers\Api;

use App\Models\Customers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AuthCustomerController extends Controller
{
    public function register(Request $request) {
       $validator = Validator::make($request->all(), [
           'name' => 'required|string',
           'email' => 'required|email|unique:customers',
           'password' => 'required|string|min:6',
           'phone' => 'required|string',
           'address' => 'nullable|string',
           'city' => 'nullable|string',
       ]);

       if ($validator->fails()) {
           return response()->json(['errors' => $validator->errors()], 422);
       }

       $customer = Customers::create([
              'name' => $request->name,
              'email' => $request->email,
              'password' => bcrypt($request->password),
              'phone' => $request->phone,
              'address' => $request->address,
              'city' => $request->city,
       ]);
        return response()->json(['message' => 'Customer registered successfully', 'customer' => $customer], 201);
    }

    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $customer = Customers::where('email', $request->email)->first();

        if ($customer) {
            if (password_verify($request->password, $customer->password)) {
                return response()->json(['message' => 'Customer logged in successfully', 'customer' => $customer], 200);
            } else {
                return response()->json(['message' => 'Password is incorrect'], 401);
            }
        } else {
            return response()->json(['message' => 'Email is not registered'], 404);
        }
    }

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Customer logged out successfully'], 200);
    }
}
