import express, { Router } from "express"
import { toDoController } from "../controllers/task.controller";

const router: Router = express.Router();

// Route Definitions
router.post('/tasks', toDoController.addTask);                 // POST: Create a new task
router.get('/tasks', toDoController.fetchTask);                // GET: Retrieve all tasks
router.get('/tasks/:id', toDoController.taskById);             // GET: Retrieve task by ID
router.patch('/tasks/:id', toDoController.updateTask);         // PATCH: Update task by ID
router.delete('/tasks/:id', toDoController.deleteTask);        // DELETE: Delete task by ID

export default router