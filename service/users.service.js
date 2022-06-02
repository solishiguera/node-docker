//const pool = require('../db/con');
const timestamp = new Date();
const Model = require('../model/user.model');

module.exports = { 
  getUserById : async (id) => {
    try {
      const user = await Model.User.findOne({
        where: {id: id}
      })
      return user;
    } catch (error) { 
      console.log(`Error al obtener usuario: Error: ${error}`)
    }
  }, 
}

