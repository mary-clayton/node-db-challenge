
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Make landing page', notes: '', completed: 1, resource_id: 1},
        {description: 'Make login page', notes: '', completed: 1, resource_id: 1},
        {description: 'Make register page', notes: '', completed: 1, resource_id: 2}
      ]);
    });
};
