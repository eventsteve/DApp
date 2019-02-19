
exports.up = function(knex, Promise) {
  return knex.schema.createTable('documents', function(t) {
    t.increments('id').unsigned().primary();
    t.integer('num_doc').notNull().unsigned().unique();
    t.string('name').notNull();
    t.string('hash').notNull();
    t.string('link_ipfs').notNull();
    t.string('owner').notNull();
    t.timestamp('created_at').defaultTo(knex.fn.now());
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('documents');
};
