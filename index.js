import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

//!Crear la app
const app = express();

//*Habilitar la lectura de los datos del formulario
app.use(express.urlencoded({ extended: true }));

//=Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexión a la base de datos correcta");
} catch (error) {
  console.log(error);
}

//?Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./views");

//!Carpeta Pública
app.use(express.static("public"));

//*Routing
app.use("/auth", usuarioRoutes);

//=Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `El servidor está funcionando correctamente en el puerto ${port}`
  );
});
