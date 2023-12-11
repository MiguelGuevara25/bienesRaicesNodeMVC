import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const { email, nombre, token } = datos;

  //!Enviar el email
  await transport.sendMail({
    from: "bienesraices.com",
    to: email,
    subject: "Confirma tu cuenta en bienesraices.com",
    text: "Confirma tu cuenta en bienesraices.com",
    html: `
        <p>Hola ${nombre}, comprueba tu cuenta en bienesraices.com</p>

        <p>Tu cuenta ya está lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.BACKEND_URL}:${
      process.env.PORT ?? 3000
    }/auth/confirmar/${token}">
            Confirmar cuenta</a>
        </p>

        <p>Si no tu creaste esta cuenta, puedes ignorar el mensaje</p>
    `,
  });
};

export { emailRegistro };
