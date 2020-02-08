const db = require('../data/db-config.js')

function getProjects() {
    return db('project');
}

function getById(id) {
    return db('project').where({ id }).first();
}


function getTasks(id) {
    return db('project as p')
    .join('tasks as t', 't.id', 'p.task_id')
    .select('p.id', 'p.project_name', 't.description', 't.notes', 't.completed')
    .where({ task_id: id })
}

function getResources(id) {
    return db('tasks as t')
    .join('resources as r', 'r.id', 't.resource_id')
    .select('t.id', 'r.resource_name', 'r.description')
    .where({ resource_id: id })

}
module.exports = {
    getProjects,
    getById,
    getTasks,
    getResources
}