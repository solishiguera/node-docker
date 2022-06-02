const UserService = require("../service/email.service");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await UserService.getUsers();
      res.json({users});
    } catch (err) {
      res.json({ message: `Error al obtener todos los usuarios. Err: ${err}` });
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await UserService.getUserById(req.params.id);
      if(user == null)  throw 'Not found'

      res.json({user});
    } catch (err) {
      res.status(404).json({ message: `Error al obtener usuario. Err: ${err}` });
    }
  },

  createUser: async (req, res, next) => {
    try {
      const user = await UserService.createUser(req.body.email, req.body.hashed_password);
      res.json({user});
    } catch (err) {
      res.json({ message: `Error al crear usuario. Err: ${err}` });
    }
  },

  deleteUserById: async (req, res, next) => {
    try {
      await UserService.deleteUserById(req.params.id);
      res.sendStatus(204)
    } catch (err) {
      res.json({ message: `Error al eliminar usuario. Err: ${err}` });
    }
  },

};