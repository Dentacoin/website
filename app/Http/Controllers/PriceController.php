<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    protected function getView($lang)   {
        var_dump($lang);
        $priceFile = file_get_contents(ASSETS . 'jsons' . DS . 'dcn-price.json');
        //var_dump(json_decode($priceFile)->data{0}->quote->USD->price);
        $array = (array)json_decode($priceFile)->data;
        var_dump($array[array_key_first($array)]->quote);
        echo (float)$array[array_key_first($array)]->quote->USD->price;
        die();


        return view('pages/press-center');
    }
}
