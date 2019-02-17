<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
class HomeController extends Controller
{
    public function postContact(Request $request){
        return response()->json(['Hi' => "Hi there!"]);
    }
}
