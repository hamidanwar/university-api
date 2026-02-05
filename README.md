# University API

This is a Node.js backend API for managing a University system.

## Features

- Users CRUD (Create, Read, Update, Delete)
- Roles CRUD
- Role assignment to users
- MongoDB integration

## Getting Started

1. Clone the repo
2. Create a `.env` file with your MongoDB credentials
3. Run `npm install` to install dependencies
4. Run `node server.js` to start the server

## Endpoints

- `GET /users` - List all users
- `POST /users` - Create a user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user
- `GET /roles` - List all roles
- `POST /roles` - Create a role
- `PUT /roles/:id` - Update a role
- `DELETE /roles/:id` - Delete a role
