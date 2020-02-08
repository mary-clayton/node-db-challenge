
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'Disney Parent', description: 'Build week 3', completed: 1, task_id: 1},
        {project_name: 'Restaurant Passport', description: 'Build week 3', completed: 1, task_id: 2},
        {project_name: 'Node-db-challenge', description: 'Sprint challenge for Lambda School', completed: 0, task_id: 3}
      ]);
    });
};
