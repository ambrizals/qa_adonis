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
const Factory = use("Factory");
const Hash = use("Hash");
const Database = use("Database");
const Moment = use("moment");

class UserSeeder {
  async run() {
    const user = await Database.table("users").insert({
      username: "admin",
      email: "admin@localhost.com",
      password: await Hash.make("admin1234"),
      created_at: await Moment().format("YYYY-MM-DD HH:MM:SS"),
      updated_at: await Moment().format("YYYY-MM-DD HH:MM:SS")
    });
    console.log(user);
  }
}

module.exports = UserSeeder;
