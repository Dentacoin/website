<?php

namespace App\Http\Controllers;

use App\Publications;
use App\UserExpressions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class PrivacyPolicyController extends Controller
{
    protected function getView()   {
        return view('pages/privacy-policy');
    }

    protected function getViewDVIOSPrivacyPolicy()   {
        return view('pages/privacy-policy-dv-ios');
    }
}
