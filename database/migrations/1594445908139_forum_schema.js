"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ForumSchema extends Schema {
  up() {
    this.create("forums", (table) => {
      table.increments();
      table.string("name", 100).notNullable().unique();
      table.string("description", 255).nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("forums");
  }
}

module.exports = ForumSchema;
