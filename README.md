# Employee Directory Web Application

This web application was developed using the MERN stack. It's an employee directory that displays a list of all the employees with the ability to filter based on the departement, location and job title. In addition, the user can search an employee by name, as he can also add, update and delete an employee.

## Usage

- Clone or download the repository.
- Configure and run mongoDB.
- Run `cd backend; npm install` or `cd backend; yarn install` to install all needed dependencies.
- Run `cd backend; yarn start` or `cd backend; npm start` to start back end development server.
- Run `cd frontend; yarn start` or `cd frontend; npm start` to start front end development server.

## Dependencies

#### Backend Dependencies

- [Express JS](https://github.com/expressjs/express) for routing http sequests
- [Nodemon](https://github.com/remy/nodemon) for automaticlly restarting server after editing.
- [Mongoose](https://github.com/Automattic/mongoose) for modeling data and connecting to database.
- [axios](https://github.com/axios/axios) to make it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- [cors](https://github.com/expressjs/cors).

#### Frontend Dependencies

- [Redux](https://github.com/reduxjs/redux) as a state container.
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) as middleware for Redux.
- [File Base 64]() to convert files to base64
- [axios](https://github.com/axios/axios)
- [Ant Design](https://github.com/ant-design/ant-design)

## Structure

```
|-- backend,
    |-- controllers,
    |-- models,
    |-- routes,

|-- frontend,
    |-- public,
    |-- src,
        |-- actions,
        |-- components,
        |-- api,
        |-- reducers

```

- `/backend` contains all the backend
- `/backend/controllers` for MVC controlers
- `/backend/models` for MVC models
- `/backend/routes` for express routes
- `/frontend` contains all the frontend
- `/frontend/public` for public files
- `/frontend/src` for all source files
- `/frontend/src/actions` contains different functions that are dispatched to send payload from application to store.
- `/frontend/src/components` contains a folder of each component with `.js` and `.css` files
- `/frontend/src/api` for api
- `/frontend/src/reducers` contains reducers that specify how application state changes in response to dispatched actions
