"use strict";

class AuthController {
  async loginForm({ view }) {
    return view.render("auth.login");
  }

  async login({ request, auth, response }) {
    const { username, password } = request.all();
    await auth.attempt(username, password);
    return response.route("auth.account");
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.route("auth.loginForm");
  }

  async account({ view }) {
    return view.render("auth.account");
  }
}

module.exports = AuthController;
