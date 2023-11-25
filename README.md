# Express.js Tasks Api

Welcome to the Express.js project! This project provides a robust API with authentication and task management functionality. Below, you'll find instructions on setting up the project and details about the available endpoints.

## Getting Started

### Prerequisites

- Node.js (v14.17.5 or higher)
- npm (v6.14.14 or higher)
- MongoDB (Make sure MongoDB server is running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RohanSinghProgrammer/Tasks-Api.git
   ```

2. Change into the project directory:

   ```bash
   cd Tasks-Api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and set the following environment variables:

   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/express-task
   JWT_SECRET=your-secret-key
   ```

   - `PORT`: The port on which the server will run.
   - `MONGODB_URI`: The connection string for your MongoDB database.
   - `JWT_SECRET`: A secret key used for signing JSON Web Tokens.

5. Start the server:

   ```bash
   npm start
   ```

   The server will now be running at http://localhost:4000.

## API Endpoints

### Base URL

The base URL for all endpoints is:

```
http://localhost:4000/api/v1
```

### Authentication Endpoints

#### 1. Register User

- **Method**: `POST`
- **Endpoint**: `/auth/register`
- **Description**: Register a new user.
- **Request Body**:

  ```json
  {
    "name": "RohanSingh",
    "email": "Rohan@gmail.com",
    "password": "1232456"
  }
  ```

- **Response**:

  ```json
  {
    "name": "RohanSingh",
    "email": "Rohan@gmail.com",
    "password": "1232456",
    "_id": "656184f7aeddc20fc52d62e3",
    "__v": 0
  }
  ```

#### 2. Login User

- **Method**: `POST`
- **Endpoint**: `/auth/login`
- **Description**: Validate user credentials and generate a Bearer token for authorization.
- **Request Body**:

  ```json
  {
    "email": "Rohan18@gmail.com",
    "password": "1232456"
  }
  ```

- **Response**:

  ```json
  {
    "email": "Rohan18@gmail.com",
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoie1wiX2lkXCI6XCI2NTYwZDU5NmYyM2E5MDhiOWFhZWY1NTdcIixcIm5hbWVcIjpcIlJvaGFuU2luZ2hcIixcImVtYWlsXCI6XCJSb2hhbjE4QGdtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpcIjEyMzI0NTZcIixcIl9fdlwiOjB9IiwiaWF0IjoxNzAwODg4MzA1LCJleHAiOjE3MDExNDc1MDV9.zsGQBklqgl7yLovE94dN1d1p99a4C2wU7JALp0E0wJk"
  }
  ```

### Task Endpoints

#### 1. Create Task

- **Method**: `POST`
- **Endpoint**: `/tasks`
- **Description**: Create a new task.
- **Request Body**:

  ```json
  {
    "title": "test5",
    "description": "sample desc for testing! 5",
    "assignedTo": "RohanSingh@gmail.com"
  }
  ```

- **Response**:

  ```json
  {
    "title": "test5",
    "description": "sample desc for testing! 5",
    "assignedTo": "RohanSingh@gmail.com",
    "isCompleted": false,
    "_id": "65618583aeddc20fc52d62e6",
    "createdAt": "2023-11-25T05:26:27.089Z",
    "updatedAt": "2023-11-25T05:26:27.089Z",
    "__v": 0
  }
  ```

#### 2. Get All Tasks

- **Method**: `GET`
- **Endpoint**: `/tasks`
- **Description**: Get all tasks.

- **Response**:

  ```json
  [
    {
      "_id": "6560b36da448625d312b18dc",
      "title": "test2",
      "description": "sample desc for testing part 2!",
      "assignedTo": "rohan@gmail.com",
      "isCompleted": false,
      "createdAt": "2023-11-24T14:30:05.317Z",
      "updatedAt": "2023-11-24T14:30:05.317Z",
      "__v": 0
    },
    {
      "_id": "6560b373a448625d312b18de",
      "title": "task",
      "description": "sample desc for testing!",
      "assignedTo": "admin@gmail.com",
      "isCompleted": true,
      "createdAt": "2023-11-24T14:30:11.860Z",
      "updatedAt": "2023-11-24T15:11:10.467Z",
      "__v": 0
    }
    // ...
  ]
  ```

#### 3. Get Specific Task

- **Method**: `GET`
- **Endpoint**: `/tasks/:taskId`
- **Description**: Get a specific task using the task ID.

- **Response**:

  ```json
  {
    "_id": "6560b36da448625d312b18dc",
    "title": "test2",
    "description": "sample desc for testing part 2!",
    "assignedTo": "rohan@gmail.com",
    "isCompleted": false,
    "createdAt": "2023-11-24T14:30:05.317Z",
    "updatedAt": "2023-11-24T14:30:05.317Z",
    "__v": 0
  }
  ```

#### 4. Update Task

- **Method**: `PUT`
- **Endpoint**: `/tasks/:taskId`
- **Description**: Update a specific task.
- **Request Body**:

  ```json
  {
    "isCompleted": true
  }
  ```

- **Response**:

  ```json
  {
    "_id": "65617d7cfcfce6e274380349",
    "title": "test5",
    "description": "sample desc for testing! 5",
    "assignedTo": "RohanSingh@gmail.com",
    "isCompleted": true,
    "createdAt": "2023-11-25T04:52:12.764Z",
    "updatedAt": "2023-11-25T04:53:53.042Z",
    "__v": 0
  }
  ```

#### 5. Delete Task

- **Method**: `DELETE`
- **Endpoint**: `/tasks/:taskId`
- **Description**: Delete a specific task.

- **Response**:

  ```json
  {
    "_id": "65618583aeddc20fc52d62e6",
    "title": "test5",
    "description": "sample desc for testing! 5",
    "assignedTo": "RohanSingh@gmail.com",
    "isCompleted": false,
    "createdAt": "2023-11-25T05:26:27.089Z",
    "updatedAt": "2023-11-25T05:26:27.089Z",
    "__v": 0
  }
  ```

### Analytics Endpoint

#### Get Analytics

- **Method**: `GET`
- **Endpoint**: `/analytics`
- **Description**: Get analytics data for completed tasks in the last specified number of days (default: 7 days).
- **Query Parameter**:

  - `days` (optional): Number of days to look back for analytics.

- **Response**:

  ```json
  {
    "message": "Last 7 days data retrieve",
    "tasksCount": 2
  }
  ```

Now you're ready to use and extend this Express.js API with authentication and task management features! If you have any questions or issues, please refer to the documentation or open an issue on the GitHub repository. Happy coding!
