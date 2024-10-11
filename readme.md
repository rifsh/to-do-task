# Project Title
To-Do-App

# My Approach
- For the i use MVC architecture
- First i set the app.ts file for routing end points and mi.ddleware usages and then i export that defualtly and import it into the server.ts file  creating the server {posrt is on 8000}.
- After this i set the router endpoints for each functionalities like add-post, fetch-post, fetch-post-by-id, update-post, and delete-task i set all this in the src/routes folder.
- Then i set all the functionalities in the src/controllers folder to imporve the code neatness.

## Overview

## Setup and Installation
- For running my application clone the project or download the zip file.
- Then just use this command "npm init" for npm inetialization
- then run the "npm start" command
- Server is running on "http://localhost:3000/api/v1/to-do"

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
