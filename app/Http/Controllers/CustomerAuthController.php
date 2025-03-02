<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Customers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerAuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('Customer/Login');
    }

    public function showRegister()
    {
        return Inertia::render('Customer/Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'password' => 'required|confirmed',
            'phone' => 'nullable',
            'address' => 'nullable',
            'city' => 'nullable',
        ]);

        $customer = Customers::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
        ]);

        Auth::guard('customer')->login($customer);

        return Inertia::class('Customer/Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (auth()->attempt($request->only('email', 'password'))) {
            return redirect()->route('/');
        }

        return back()->withErrors(['email' => 'Login gagal, cek kembali email dan password!']);
    }

    public function logout()
    {
        Auth::guard('customer')->logout();
        return redirect()->route('customer.Login');
    }
}
