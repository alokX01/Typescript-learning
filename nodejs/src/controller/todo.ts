import type { RequestHandler } from "express";
import { Todo } from "../models/todo.js";

const TODO: Todo[] = [];

// CREATE todo
export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;

  const newTodo = new Todo(Math.random().toString(), text);
  TODO.push(newTodo);

  res.status(201).json({
    message: "Todo created",
    newTodo,
  });
};

// GET all todos
export const getTodo: RequestHandler = (req, res) => {
  res.status(200).json(TODO);
};

// UPDATE todo
export const updateTodo: RequestHandler = (req, res) => {
  const todoId = req.params.todoId;
  const text = (req.body as { text: string }).text;

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const todo = TODO[todoIndex];

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.text = text;

  res.status(200).json({
    message: "Todo updated",
    todo,
  });
};

// DELETE todo
export const deleteTodo: RequestHandler = (req, res) => {
  const todoId = req.params.todoId;

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = TODO.splice(todoIndex, 1);

  res.status(200).json({
    message: "Todo deleted",
    todo: deletedTodo[0],
  });
};
