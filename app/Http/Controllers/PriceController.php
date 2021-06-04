<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    protected function getView($lang)   {
        var_dump($lang);
        $priceFile = file_get_contents(ASSETS . 'jsons' . DS . 'dcn-price.json');
        //var_dump(json_decode($priceFile)->data{0}->quote->USD->price);
        var_dump(json_decode($priceFile)->data);
        die();


        return view('pages/press-center');
    }
}
