<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    protected function getView($lang)   {
        var_dump($lang);
        $priceFile = file_get_contents(ASSETS . 'jsons' . DS . 'dcn-price.json');
        //var_dump(json_decode($priceFile)->data{0}->quote->USD->price);
        $array = json_decode($priceFile,true);
        var_dump($array['data'][array_key_first($array['data'])]['quote']['USD']['price']);
        var_dump(number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1));
        //var_dump((float)number_format($array[array_key_first($array)]->quote->USD->price,10));
        //echo (float)$array[array_key_first($array)]->quote->USD->price;
        die();


        return view('pages/press-center');
    }
}