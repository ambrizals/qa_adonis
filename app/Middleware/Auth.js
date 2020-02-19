"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Auth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ response, auth }, next) {
    // call next to advance the request
    try {
      await auth.check();

      // Jika user telah melakukan login, halaman ditampilkan
      await next();
    } catch (err) {
      // Jika user belum melakukan login, user diarahkan pada halaman login
      return response.route("auth.loginForm");
    }
  }
}

module.exports = Auth;
