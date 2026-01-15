import express from "express";
import todoRoutes from "./routes/todo.js";
const app = express();
const port = 8080;
app.use(express.json());
app.use("/todos", todoRoutes);
// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});
app.get("/", (req, res) => {
    res.send("Hello from TypeScript with node and express");
});
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
//# sourceMappingURL=index.js.map