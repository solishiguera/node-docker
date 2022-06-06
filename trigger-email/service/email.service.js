const Model = require('../model/email.model');

module.exports = { 
  getByEmail : async (from_email) => {
    try {
      const emails = await Model.Email.findAll({ where: { from_email: from_email } })
      if(emails == null) throw 'Email not found'
      
      return emails;
    } catch (error) { 
      console.log(`Service error: error al obtener correos: Error: ${error}`)
    }
  }, 

  trigger : async (to_email, from_email, content) => {
    try {
      const email = await Model.Email.create({
        to_email: to_email,
        from_email: from_email,
        content: content
      })
      return email;
    } catch (error) { 
      console.log(`Service error: error al crear correo: Error: ${error}`)
    }
  }

}

