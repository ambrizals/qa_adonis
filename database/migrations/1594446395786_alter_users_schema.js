"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterUsersSchema extends Schema {
  up() {
    this.alter("users", (table) => {
      table.boolean("is_admin").default(false);
      table.boolean("is_moderator").default(false);
    });
  }

  down() {
    this.alter("users", (table) => {
      table.dropColumn("is_admin");
      table.dropColumn("is_moderator");
    });
  }
}

module.exports = AlterUsersSchema;
