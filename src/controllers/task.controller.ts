import { Request, Response } from "express";
import { Task } from "../model/interfaces/task.model";

const tasks: Task[] = [];

//Adding tasks
const addTask = (req: Request, res: Response) => {
    const task: Task = req.body;

    //checking if the user provide the data
    if (!task.title || !task.description) {
        res.status(400).json({
            message: "Please provide task title and description"
        });
    };
    // adding task in to the array 'tasks'
    tasks.push({
        title: task.title,
        description: task.description,
        completion: task.completion || false,
        taskId: tasks.length + 1
    });

    //sending response to the user if the task is added
    res.status(201).json({
        message: "Your task is added successfully"
    });
}

//fetching tasks
const fetchTask = (req: Request, res: Response) => {
    //check if the tasks array is empty or not
    if (tasks.length === 0) {
        return res.status(204).json({
            message: "Your task is empty please add some tasks"
        });
    } else {
        res.json({
            totalTasks: tasks.length,
            tasks
        });
    }
}

// fetch each task
const taskById = (req: Request, res: Response) => {
    const taskId: number = Number(req.params.id);
    const task = tasks.find((x) => { return x.taskId === taskId });
    if (tasks.length === 0) {
        res.status(204).json({
            message: "Your task is empty please add some tasks"
        });
    } else {
        if (!task && tasks.length > 0) {
            res.status(404).json({
                message: `No task found with id ${taskId}`
            });
        } else {
            res.json({
                task
            })
        }
    }
}

// update task
const updateTask = (req: Request, res: Response) => {
    const taskId: number = Number(req.params.id);
    const updateData: Task = req.body;

    //checking that if there any tasks present
    if (tasks.length === 0) {
        res.status(204).json({
            message: "Your task is empty please add some tasks"
        });

        //if task present
    } else {
        const task: Task = tasks.find((x) => { return x.taskId === taskId });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        //updating the task with appropriate fields
        if (updateData.title) task.title = updateData.title;
        if (updateData.description) task.description = updateData.description;
        if (updateData.completion !== undefined) task.completion = updateData.completion;
        res.status(200).json({
            message: `Task with id ${taskId} updated Successfully`,
            task
        })
    }
}

//specific task deletion
const deleteTask = (req: Request, res: Response) => {
    const taskId: number = Number(req.params.id);

    //checking that if there any tasks present
    if (tasks.length === 0) {
        return res.status(204).json({
            message: "Your task is empty please add some tasks"
        });

        //if task present
    }
    const taskIndex: number = tasks.findIndex((x) => { return x.taskId === taskId });
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).json({
        message: `Task with id ${taskId} is deleted successfully`
    });
}



export const toDoController = {
    addTask,
    fetchTask,
    updateTask,
    deleteTask,
    taskById,
}