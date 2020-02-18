"use strict";

class AuthController {
  async loginForm({ view }) {
    return view.render("auth.login");
  }

  async login({ request, auth, response }) {
    const { username, password } = request.all();
    await auth.attempt(username, password);

    return response.route("auth.check");
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.route("auth.loginForm");
  }

  async check({ view }) {
    return view.render("auth.check");
  }
}

module.exports = AuthController;
