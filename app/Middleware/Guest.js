"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Guest {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    try {
      await auth.check();
      return response.route("/");
      // Jika user telah melakukan login, halaman ditampilkan
    } catch (err) {
      // Jika user belum melakukan login, user diarahkan pada halaman login
      await next();
    }
  }
}

module.exports = Guest;
