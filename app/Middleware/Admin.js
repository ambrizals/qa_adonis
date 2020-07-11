"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    // call next to advance the request
    try {
      const user = await auth.getUser();
      if (user.is_admin == true) {
        await next();
      } else {
        return response.route("/");
      }
    } catch (error) {
      return response.route("auth.loginForm");
    }
  }
}

module.exports = Admin;
