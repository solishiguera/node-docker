const EmailService = require("../service/email.service");

module.exports = {
  getByEmail: async (req, res, next) => {
    try {
      const emails = await EmailService.getByEmail(req.params.from_email);
      res.json({emails});
    } catch (err) {
      res.json({ message: `Error al obtener correos. Err: ${err}` });
    }
  },

  trigger: async (req, res, next) => {
    try {
      const users = await EmailService.trigger(req.body.to_email, req.body.from_email, req.body.content);
      res.json({users});
    } catch (err) {
      res.json({ message: `Error al agregar correo. Err: ${err}` });
    }
  }

};