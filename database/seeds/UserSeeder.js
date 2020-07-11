"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use("Factory");
const Hash = use("Hash");
const Database = use("Database");
const Moment = use("moment");

class UserSeeder {
  async run() {
    const user = await Database.table("users").insert({
      username: "admin",
      email: "admin@localhost.com",
      password: await Hash.make("admin1234"),
      updated_at: await Moment().format("YYYY-MM-DD"),
      created_at: await Moment().format("YYYY-MM-DD"),
      is_admin: true,
      is_moderator: false,
    });
    console.log(user);
  }
}

module.exports = UserSeeder;
