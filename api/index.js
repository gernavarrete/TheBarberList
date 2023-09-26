const server = require("./src/app.js");
const { conn } = require("./src/db.js");
//const transporter = require("./src/mailer/mailer");
const { PORT } = process.env;

conn
  .sync({
    //force: true,
    //alter: true
  })
  .then(async () => {
    console.log("Database:      ✅");
    server.listen(PORT || 3001, () => {
      console.log(`Back server:   ✅  -  (port: ${PORT || 3001})`); // eslint-disable-line no-console
    });
  })
  /* .then(async () => {
    await transporter.verify().then(() => {
      console.log("Email service: ✅");
    });
  }) */

  // Inserts de prueba en DB

  .catch((err) => console.log(err));
