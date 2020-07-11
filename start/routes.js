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

// Membuat route group dengan prefix auth
Route.group(function () {
  // Method get hanya akan berfungsi pada jenis permintaan GET
  Route.get("login", "AuthController.loginForm")
    .as("auth.loginForm")
    .middleware("guestCustom");
  Route.get("/", "AuthController.account")
    .as("auth.account")
    .middleware("auth");

  Route.get("password", "AuthController.changePassword")
    .as("auth.changepw")
    .middleware("auth");

  Route.post("password", "AuthController.updatePassword")
    .as("auth.updatepw")
    .middleware("auth");

  // Method post hanya akan berfungsi pada jenis permintaan POST
  Route.post("logout", "AuthController.logout")
    .as("auth.logout")
    .middleware("auth");
  Route.post("login", "AuthController.login")
    .as("auth.login")
    .middleware(["guest"]);

  Route.get("signup", "AuthController.signUp")
    .as("auth.signup")
    .middleware(["guest"]);

  Route.post("signup", "AuthController.createUser")
    .as("auth.createUser")
    .middleware(["guest"])
    .validator("Auth/SignUp");
}).prefix("auth");

Route.group(function () {
  Route.get("/", "DashboardController.index").as("dashboard.index");
  Route.resource("forum", "ForumController");
})
  .prefix("admin")
  .namespace("Admin")
  .middleware("admin");
