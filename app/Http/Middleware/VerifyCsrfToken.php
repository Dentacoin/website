<?php

namespace App\Http\Middleware;
use Symfony\Component\HttpFoundation\Cookie;
use Carbon\Carbon;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'get-holiday-calendar-participants', 'dentacoin-login-gateway', 'dentacoin-login-gateway/*', 'check-dentist-account', 'get-country-code', 'combined-hub/*', 'info/get-clinics-for-wallet', 'authenticate-user'
    ];

    protected function addCookieToResponse($request, $response) {
        $config = config('session');
        $response->headers->setCookie(
            new Cookie(
                'XSRF-TOKEN', $request->session()->token(), Carbon::now()->getTimestamp() + 60 * $config['lifetime'],
                $config['path'], $config['domain'], $config['secure'], $config['http_only']
            )
        );

        return $response;
    }
}
