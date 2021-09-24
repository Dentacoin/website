<?php

namespace App\Http\Controllers;

class APIRequestsController extends Controller {
    public function dentistLogin($data, $dontCountLogin = false, $url = 'https://api.dentacoin.com/api/login') {
        $postData = array(
            'platform' => $data['platform'],
            'type' => 'dentist',
            'email' => $data['email'],
            'password' => $data['password'],
            'client_ip' => $this->getClientIp()
        );

        if($dontCountLogin) {
            $postData['dont_count_login'] = true;
        }

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => $url,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => $postData
        ));

        $resp = json_decode(curl_exec($curl), true);
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function dentistRegister($data, $url = 'https://api.dentacoin.com/api/register') {
        $post_fields_arr = array(
            'platform' => $data['platform'],
            'name' => trim($data['latin-name']),
            'email' => $data['email'],
            'password' => $data['password'],
            'password-repeat' => $data['repeat-password'],
            'country_code' => $data['country-code'],
            'address' => $data['address'],
            'avatar' => curl_file_create($data['image-path'], 'image/png', $data['image-name']),
            'phone' => $data['phone'],
            'website' => $data['website'],
            'client_ip' => $this->getClientIp()
        );

        if(is_array($data['specializations'])) {
            $post_fields_arr['specialisations'] = json_encode($data['specializations']);
        } else {
            $post_fields_arr['specialisations'] = $data['specializations'];
        }

        if(!empty($data['alternative-name'])) {
            $post_fields_arr['name_alternative'] = trim($data['alternative-name']);
        }

        if(!empty($data['dentist-title'])) {
            $post_fields_arr['title'] = trim($data['dentist-title']);
        }

        if(!empty($data['dentist_practice'])) {
            $post_fields_arr['dentist_practice'] = trim($data['dentist_practice']);
        }

        if(!empty($data['clinic_name'])) {
            $post_fields_arr['clinic_name'] = trim($data['clinic_name']);
        }

        if(!empty($data['clinic_email'])) {
            $post_fields_arr['clinic_email'] = trim($data['clinic_email']);
        }

        if(!empty($data['worker_name'])) {
            $post_fields_arr['worker_name'] = trim($data['worker_name']);
        }

        if(!empty($data['working_position'])) {
            $post_fields_arr['working_position'] = trim($data['working_position']);
        }

        if(!empty($data['working_position_label'])) {
            $post_fields_arr['working_position_label'] = trim($data['working_position_label']);
        }

        if(!empty($data['inviter'])) {
            $post_fields_arr['invited_by'] = trim($data['inviter']);
        }

        switch($data['user-type']) {
            case 'dentist':
                $post_fields_arr['type'] = 'dentist';
                break;
            case 'clinic':
                $post_fields_arr['type'] = 'clinic';
                break;
        }

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => $url,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => $post_fields_arr
        ));

        $resp = json_decode(curl_exec($curl), true);
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function getAllCountries() {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/countries/',
            CURLOPT_SSL_VERIFYPEER => 0
        ));
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $resp = json_decode(curl_exec($curl));
        curl_close($curl);
        if(!empty($resp))   {
            return $resp->data;
        }else {
            return false;
        }
    }

    public function getAllEnums() {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/enums/',
            CURLOPT_SSL_VERIFYPEER => 0
        ));
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $resp = json_decode(curl_exec($curl));
        curl_close($curl);
        if(!empty($resp))   {
            return $resp->data;
        }else {
            return false;
        }
    }

    public function getUserData($id, $fullResponse = false) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/user/?id='.urlencode($this->encrypt($id, getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))),
            CURLOPT_SSL_VERIFYPEER => 0,
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp) && property_exists($resp, 'success')) {
            if($fullResponse) {
                return $resp;
            } else {
                return $resp->data;
            }
        }else {
            return false;
        }
    }

    public function getUsersData($arrayIds) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/get-users-data/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'ids' => (new \App\Http\Controllers\Controller())->encrypt(json_encode($arrayIds) , getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp) && property_exists($resp, 'success')) {
            return $resp;
        }else {
            return false;
        }
    }

    public function registerDCNReward($user_id, $amount, $platform) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/add-rewards/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'hashed_dcn_reward' => (new \App\Http\Controllers\Controller())->encrypt(json_encode(array('user_id' => $user_id, 'amount' => $amount, 'platform' => $platform)) , getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);;

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function sendChristmasTemplate($emails) {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . session('logged_user')['token'];
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/send-christmas-template',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header,
            CURLOPT_POSTFIELDS => array(
                'emails' => $emails
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function checkIfUserExist($email) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/check-email/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'email' => $email
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function checkIfFreeEmail($email) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/check-email',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'email' => $email
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function getDCNBalance() {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . session('logged_user')['token'];
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/balance',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function getDCNTransactions() {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . session('logged_user')['token'];
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/transcations/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function updateAnonymousUserData($data, $url = 'https://api.dentacoin.com/api/user-anonymous/') {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => $url,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => $data
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function getCountry($client_ip)  {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => 'https://ipinfo.io/' . $client_ip . '/country?token='.getenv('IPINFO_TOKEN'),
            CURLOPT_SSL_VERIFYPEER => 0
        ));
        $resp = curl_exec($curl);
        curl_close($curl);

        if (!empty($resp)) {
            return mb_strtolower(trim($resp));
        } else {
            return false;
        }
    }

    public function getCurrentDcnRateByCoingecko()  {
        //API connection
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => "https://api.coingecko.com/api/v3/coins/dentacoin",
            CURLOPT_SSL_VERIFYPEER => 0
        ));
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $resp = json_decode(curl_exec($curl));
        curl_close($curl);
        if(!empty($resp))   {
            if(!empty($resp->market_data->current_price))  {
                return array(
                    'USD' => $resp->market_data->current_price->usd,
                    'EUR' => $resp->market_data->current_price->eur,
                    'GBP' => $resp->market_data->current_price->gbp,
                    'RUB' => $resp->market_data->current_price->rub,
                    'INR' => $resp->market_data->current_price->inr,
                    'CNY' => $resp->market_data->current_price->cny,
                    'JPY' => $resp->market_data->current_price->jpy
                );
            }else {
                return 0;
            }
        }
    }

    public function getDentacoinDataByExternalProvider()  {
        // check if external provider price reading is allowed
        if  (!empty(getenv('EXTERNAL_PROVIDER_PRICE_READING')) && !empty(getenv('EXTERNAL_PROVIDER_PRICE_READING_TYPE')) && filter_var(getenv('EXTERNAL_PROVIDER_PRICE_READING'), FILTER_VALIDATE_BOOLEAN)) {
            if (getenv('EXTERNAL_PROVIDER_PRICE_READING_TYPE') == 'indacoin') {
                $currencies = array('USD'/*, 'EUR', 'GBP', 'RUB'*/);
                $tempArray = array();
                foreach($currencies as $currency) {
                    $curl = curl_init();
                    curl_setopt_array($curl, array(
                        CURLOPT_RETURNTRANSFER => 1,
                        CURLOPT_URL => 'https://indacoin.com/api/GetCoinConvertAmount/'.$currency.'/DCN/100/dentacoin',
                        CURLOPT_SSL_VERIFYPEER => 0
                    ));
                    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                    $resp = json_decode(curl_exec($curl));
                    curl_close($curl);

                    if(!empty($resp))   {
                        $tempArray[$currency] = 1 / (int)((int)$resp / 100);
                    }
                }

                if(!empty($tempArray)) {
                    return $tempArray;
                } else {
                    return 0;
                }
            } else if (getenv('EXTERNAL_PROVIDER_PRICE_READING_TYPE') == 'coingecko') {
                $curl = curl_init();
                curl_setopt_array($curl, array(
                    CURLOPT_RETURNTRANSFER => 1,
                    CURLOPT_URL => "https://api.coingecko.com/api/v3/coins/dentacoin",
                    CURLOPT_SSL_VERIFYPEER => 0
                ));
                curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                $resp = json_decode(curl_exec($curl));
                curl_close($curl);
                if(!empty($resp))   {
                    if(!empty($resp->market_data->current_price))  {
                        return array(
                            'USD' => $resp->market_data->current_price->usd
                        );
                    }else {
                        return 0;
                    }
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    public function getIncompletedRegistrationData($key, $id, $url = 'https://api.dentacoin.com/api/get-incomplete-registration/')  {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => $url,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'temp-data-key' => $key,
                'temp-data-id' => $id
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function checkUserIdAndToken($id, $token)  {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . $token;
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/check-user-info/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header,
            CURLOPT_POSTFIELDS => array(
                'user_id' => $id
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        }else {
            return false;
        }
    }

    public function validateAccessToken() {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . session('logged_user')['token'];
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/validate-access-token/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function getMapData($array) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/get-dentacoin-map-data',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'search' => (new \App\Http\Controllers\Controller())->encrypt(json_encode($array) , getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function getDCNSubscribers() {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => 'https://dentacoin.com/info/subscribed-users',
            CURLOPT_SSL_VERIFYPEER => 0
        ));

        $resp = curl_exec($curl);
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return 0;
        }
    }

    public function getDCNTransactionsCount() {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => 'https://payment-server-info.dentacoin.com/get-dcn-events-history-count',
            CURLOPT_SSL_VERIFYPEER => 0
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function checkIfCivicEmailTryingToLoginFromMobileApp($email) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/check-mobile-app-login',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'email' => (new \App\Http\Controllers\Controller())->encrypt($email, getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function saveCivicEmailTryingToLoginFromMobileApp($array) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_POST => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/mobile-app-login',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POSTFIELDS => array(
                'fields' => (new \App\Http\Controllers\Controller())->encrypt(json_encode($array), getenv('API_ENCRYPTION_METHOD'), getenv('API_ENCRYPTION_KEY'))
            )
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if(!empty($resp))   {
            return $resp;
        } else {
            return false;
        }
    }

    public function getUnseenNotificationsCount($returnAsJson = false)  {
        $header = array();
        $header[] = 'Accept: */*';
        $header[] = 'Authorization: Bearer ' . session('logged_user')['token'];
        $header[] = 'Cache-Control: no-cache';

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => getenv('API_DOMAIN').'/api/unseen-notifications-count/',
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HTTPHEADER => $header
        ));

        $resp = json_decode(curl_exec($curl));
        curl_close($curl);

        if (!empty($resp))   {
            if ($returnAsJson) {
                return response()->json($resp);
            } else {
                return $resp;
            }
        } else {
            return false;
        }
    }
}