const express = require('express');
const router = express.Router();
const todoController = require('./controller/todo.controller');

//tarefas
router.get('/tarefas', async (request, response) => {
  const todos = await todoController.listTodos(request, response);
  return response.json(todos);
});

router.post('/tarefas', async (request, response) => {
  const todo = todoController.createTodo(request, response);
  return response.json(todo);
});
router.put('/tarefas', async (request, response) => {
  const todo = await todoController.updateTodo(request, response);
  return response.json(todo);
});

module.exports = router;
