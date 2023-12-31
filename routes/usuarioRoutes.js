import {
  formularioLogin,
  formularioRegistro,
  registrar,
  confirmar,
  formularioOlvidePassword,
} from "../controllers/usuarioController.js";
import express from "express";

const router = express.Router();

router.get("/login", formularioLogin);

router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/confirmar/:token", confirmar);

router.get("/olvide-password", formularioOlvidePassword);

export default router;
