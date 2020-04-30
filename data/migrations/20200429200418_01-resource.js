exports.up = function (knex) {
  return knex.schema.createTable("resource", (tbl) => {
    tbl.increments();
    tbl.text("resource_name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resource");
};
