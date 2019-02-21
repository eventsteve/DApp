
exports.seed = function(knex) {
  return knex('documents').del();
};
