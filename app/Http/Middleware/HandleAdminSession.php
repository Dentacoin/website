<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\Admin\MainController;

class HandleAdminSession
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $admin_controller = new MainController();
        if(!$admin_controller->checkLogin() && empty($request->input('username')) && empty($request->input('password'))) {
            //NOT LOGGED AND NOT TRYING TO LOG IN
            return response($admin_controller->getAdminAccess());
        }
        return $next($request);
    }
}
