const Contacto = require('../../model/mailchimpPost')
const sgMail = require('@sendgrid/mail');

// Conf .env 
require('dotenv').config()

const myEmail = process.env.myEmail;

// const myPassword = process.env.myPassword;
const miApi = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(miApi);

exports.enviarMensaje = async (req, res) => {
  const contacto = new Contacto(req.body);
  await contacto.save()
    .then(() => {
      // Envío de correo electrónico
      const msg = {
        to: req.body.email,
        from:  myEmail, // Dirección de correo electrónico falsa
        subject: 'Gracias por contactar con nosotros',
        html: `
          <h1>Gracias por contactar con nosotros</h1>
          <p>En breve nos pondremos en contacto con usted.</p>
          <h2>Servicios que ofrecemos</h2>
          <ul>
          <li>Personalisar ropas</li>
          <li>Crear páginas</li>
          <li>Organizar eventos</li>
          </ul>
          `
        };
        
        console.log(msg);
      sgMail.send(msg)
        .then(() => {
          console.log('Correo electrónico enviado');
        })
        .catch((error) => {
          console.error("Error "+error);
          
        });

      // res.render('confirmacion');
    })
    .catch(err => console.log(err));
};
