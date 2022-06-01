const UserService = require("../service/users.service");

module.exports = {
  getUserById: async (req, res, next) => {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json({user});
    } catch (err) {
      res.json({ message: `Error al obtener usuario. Err: ${err}` });
    }
  },

};