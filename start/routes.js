"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");
Route.group(function() {
  Route.get("login", "AuthController.loginForm").as("auth.loginForm");
  Route.post("login", "AuthController.login").as("auth.login");
  Route.get("/", "AuthController.check")
    .as("auth.check")
    .middleware("auth");
  Route.post("logout", "AuthController.logout")
    .as("auth.logout")
    .middleware("auth");
}).prefix("auth");
