<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    protected function getView($lang)   {
        var_dump($lang);
        $priceFile = readfile(ASSETS . 'jsons' . DS . 'dcn-price.json');
        var_dump($priceFile);
        die();


        return view('pages/press-center');
    }
}
