import express from "express";
import { createTodo, getTodo } from "../controller/todo.js";
const router = express.Router();
router
    .route("/")
    .post(createTodo) // create todo
    .get(getTodo); // get todos
router
    .route("/:todoId")
    .patch((req, res) => {
    res.json({ message: "Update todo" });
}) // update todo
    .delete((req, res) => {
    res.json({ message: "Delete todo" });
}); // delete todo
export default router;
//# sourceMappingURL=todo.js.map