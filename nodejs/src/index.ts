import express from "express";
import type { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todo.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/todos", todoRoutes);

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript with node and express");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
