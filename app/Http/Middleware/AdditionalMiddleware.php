<?php

namespace App\Http\Middleware;

use Closure;
use App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

class AdditionalMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        /*if(!isset($_COOKIE['testing-dev'])) {
            return response(view('pages/maintenance'));
        }*/
        //$params = $request->route()->parameters();

        $response = $next($request);
        $response->headers->set('Referrer-Policy', 'no-referrer');
        $response->headers->set('X-XSS-Protection', '1; mode=block');

        $route = Route::getRoutes()->match($request);
        if ($route->getName() != 'google-map-iframe') {
            $response->headers->set('X-Frame-Options', 'DENY');
        }

        return (new App\Http\Controllers\Controller())->minifyHtml($response);
    }
}
