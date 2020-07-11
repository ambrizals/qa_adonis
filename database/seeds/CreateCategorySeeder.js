"use strict";

/*
|--------------------------------------------------------------------------
| CreateCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use("Database");
const Moment = use("moment");

class CreateCategorySeeder {
  async run() {
    const category = await Database.table("categories").insert({
      name: "General",
      description: "General Category",
      updated_at: await Moment().format("YYYY-MM-DD"),
      created_at: await Moment().format("YYYY-MM-DD"),
    });
  }
}

module.exports = CreateCategorySeeder;
