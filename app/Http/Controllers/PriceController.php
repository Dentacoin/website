<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PriceController extends Controller
{
    const languages = ['en', 'de', 'es', 'br'];

    protected function getView($lang)   {
        if (empty($lang) || !in_array($lang, SELF::languages)) {
            return abort(404);
        }

        $priceFile = file_get_contents(ASSETS . 'jsons' . DS . 'dcn-price.json');
        $array = json_decode($priceFile,true);

        switch($lang) {
            case 'en':
                $subtitle = 'The Bitcoin of Dentistry';
                $accepted = 'ACCEPTED HERE';
                $currencyLabel = 'USD';
                $icon = 'usd-icon.svg';
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
            case 'de':
                $subtitle = 'Das Bitcoin der Zahnmedizin';
                $accepted = 'HIER ANGENOMMEN';
                $currencyLabel = 'EUR';
                $icon = 'euro-icon.svg';
                $coingeckoCall = (new APIRequestsController())->getCurrentDcnRateByCoingecko();
                if (!empty($coingeckoCall)) {
                    $price = $coingeckoCall['EUR'];
                } else {
                    $price = 0;
                }
                break;
            case 'es':
                $subtitle = 'El Bitcoin de la Odontología';
                $accepted = 'ACEPTADO AQUÍ';
                $currencyLabel = 'USD';
                $icon = 'usd-icon.svg';
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
            case 'br':
                $subtitle = 'A Bitcoin da Odontologia';
                $accepted = 'AQUI ACEITADO';
                $currencyLabel = 'USD';
                $icon = 'usd-icon.svg';
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
        }

        return view('pages/price', ['price' => $price, 'subtitle' => $subtitle, 'accepted' => $accepted, 'icon' => $icon, 'currencyLabel' => $currencyLabel, 'lang' => $lang]);
    }

    protected function getCurrentFiatPrice(Request $request) {
        $this->validate($request, [
            'language' => 'required|max:2'
        ], [
            'language.required' => 'Language is required.',
        ]);

        if (!in_array($request->input('language'), SELF::languages)) {
            return abort(404);
        }

        $priceFile = file_get_contents(ASSETS . 'jsons' . DS . 'dcn-price.json');
        $array = json_decode($priceFile,true);

        switch($request->input('language')) {
            case 'en':
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
            case 'de':
                $coingeckoCall = (new APIRequestsController())->getCurrentDcnRateByCoingecko();
                if (!empty($coingeckoCall)) {
                    $price = $coingeckoCall['EUR'];
                } else {
                    $price = 0;
                }
                break;
            case 'es':
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
            case 'br':
                $price = number_format($array['data'][array_key_first($array['data'])]['quote']['USD']['price'],strlen($array['data'][array_key_first($array['data'])]['quote']['USD']['price']) - 1);
                break;
        }

        return response()->json(['success' => true, 'data' => number_format(1000 * $price, 4, '.', '')]);
    }
}