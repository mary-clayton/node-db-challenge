
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Desktop computer', description: 'an unexpensive computer'},
        {resource_name: 'Internet', description: 'Google as main resource'},
        {resource_name: 'Lambda student', description: 'a soon to be hired developer'}
      ]);
    });
};
