# Project Title
**To-Do App**

## My Approach
- For this task, I used the MVC architecture.
- First, I set up the `app.ts` file for routing endpoints and middleware usages, then exported it and imported it into the `server.ts` file to create the server (port is set to 3000).
- I defined the router endpoints for each functionality, such as `add-task`, `fetch-tasks`, `fetch-task-by-id`, `update-task`, and `delete-task`, all located in the `src/routes` folder.
- Then, I implemented the functionalities in the `src/controllers` folder to maintain code organization and neatness.

## Overview
This API provides basic CRUD operations to manage tasks, allowing users to create, read, update, and delete tasks efficiently.

## Setup and Installation
1. Clone the project or download the zip file.
2. Navigate to the project directory in your terminal.
3. Run the command: 
   ```bash
   npm init -y

## Endpoints
### 1. Create a Task
- **Endpoint**: `/tasks`
- **Method**: `POST`
- **Description**: Adds a new task...

### 2. Get All Tasks
- **Endpoint**: `/tasks`
- **Method**: `GET`
- **Description**: Fetch all tasks
- 
### 2. Get Task Bi ID
- **Endpoint**: `/tasks/:id`
- **Method**: `GET`
- **Description**: Fetch specific task

### 2. Update Task
- **Endpoint**: `/tasks/:id`
- **Method**: `PATCH`
- **Description**: Update a specific task

### 2. Delete Specific Task
- **Endpoint**: `/tasks/:id`
- **Method**: `DELETE`
- **Description**: Delete a specific task

## Validation Rules
- `id`: Unique identifier for each task.
- `title`: Title of the task (required fields).
- `description`: Description of the task (required fields).
- `completed`: Boolean to indicate if the task is completed.
- 
## Error Handling
- 400 Bad Request: For missing required fields or invalid input.
- 204 Task is empty.
- 404 Not Found: When the requested task does not exist.
- 500 Internal Server Error: For any server-side errors.

## Testing the API
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Task", "description":"Task details", "completed":false}' http://localhost:3000/api/v1/to-do/

## Future Improvements
- Adding a database connection using a library like Mongoose for MongoDB.
- Implementing authentication and authorization.
- Unit testing for each endpoint.
