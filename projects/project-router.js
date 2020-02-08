const express = require('express');
const Project = require('./project-model.js')
const router = express.Router()

router.get('/', (req, res) => {
    Project.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' })
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Project.getById(id)
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' })
    })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Project.getTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Project.getResources(id)
    .then(resource => {
      if (resource.length) {
        res.json(resource);
      } else {
        res.status(404).json({ message: 'Could not find resources' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

module.exports = router;