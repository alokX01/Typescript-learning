import { Todo } from "../models/todo.js";
const TODO = [];
// CREATE todo
export const createTodo = (req, res) => {
    const text = req.body.text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({
        message: "Todo created",
        newTodo,
    });
};
// GET all todos
export const getTodo = (req, res) => {
    res.status(200).json(TODO);
};
// UPDATE todo
export const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const text = req.body.text;
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
export const deleteTodo = (req, res) => {
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
//# sourceMappingURL=todo.js.map