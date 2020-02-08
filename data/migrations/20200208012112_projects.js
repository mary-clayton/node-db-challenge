
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.text('project_name', 128)
            .unique()
            .notNullable()
        tbl.text('description')
        tbl.boolean('completed')
            .notNullable()
            .default(0)
        tbl.integer('task_id')
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description')
            .notNullable()
        tbl.text('notes')
        tbl.boolean('completed')
            .notNullable()
            .default(0)
        tbl.integer('resource_id')
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name', 128)
            .unique()
            .notNullable()
        tbl.text('description')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
