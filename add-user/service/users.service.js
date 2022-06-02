//const pool = require('../db/con');
const timestamp = new Date();
const Model = require('../model/user.model');

module.exports = { 
  getUsers : async () => {
    try {
      const users = await Model.User.findAll()
      return users;
    } catch (error) { 
      console.log(`Service error: error al obtener usuarios: Error: ${error}`)
    }
  }, 

  getUserById : async (id) => {
    try {
      const user = await Model.User.findOne({
        where: {id: id}
      })
      return user;
    } catch (error) { 
      console.log(`Service error: error al obtener usuario: Error: ${error}`)
    }
  }, 

  createUser : async (email, password) => {
    try {
      const user = await Model.User.create({
        email: email,
        hashed_password: password
      })
      return user;
    } catch (error) { 
      console.log(`Service error: error al crear usuario: Error: ${error}`)
    }
  }, 

  deleteUserById : async (id) => {
    try {
      await Model.User.destroy({
        where:{
          id: id
        }
      })
    } catch (error) { 
      console.log(`Service error: error al eliminar usuario: Error: ${error}`)
    }
  }, 
}

