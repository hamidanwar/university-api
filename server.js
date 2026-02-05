const express = require('express');
const { connectDB } = require('./config/db');
const roleModel = require('./models/role');
const userModel = require('./models/user');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const startServer = async () => {
  try {
    const db = await connectDB(); // wait for DB first

    // ----- Roles -----
    app.get('/roles', async (req, res) => res.json(await roleModel.getRoles(db)));
    app.get('/roles/:id', async (req, res) => res.json(await roleModel.getRoleById(db, req.params.id)));
    app.post('/roles', async (req, res) => res.status(201).json(await roleModel.createRole(db, req.body)));
    app.put('/roles/:id', async (req, res) => res.json(await roleModel.updateRole(db, req.params.id, req.body)));
    app.delete('/roles/:id', async (req, res) => res.json(await roleModel.deleteRole(db, req.params.id)));

    // ----- Users -----
    app.get('/users', async (req, res) => res.json(await userModel.getUsers(db)));
    app.get('/users/:id', async (req, res) => res.json(await userModel.getUserById(db, req.params.id)));
    app.post('/users', async (req, res) => res.status(201).json(await userModel.createUser(db, req.body)));
    app.put('/users/:id', async (req, res) => res.json(await userModel.updateUser(db, req.params.id, req.body)));
    app.delete('/users/:id', async (req, res) => res.json(await userModel.deleteUser(db, req.params.id)));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Server startup failed:', err.message);
  }
};

startServer();
