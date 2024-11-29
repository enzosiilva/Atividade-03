import express from "express";
import EventoController from "../controllers/eventoController.js";

const routes = express.Router();

routes.get("/eventos", EventoController.listarEventos);
routes.get("/eventos/:id", EventoController.listarEventoPorId);
routes.post("/eventos", EventoController.cadastrarEvento);
routes.put("/eventos/:id", EventoController.atualizarEvento);
routes.delete("/eventos/:id", EventoController.excluirEvento);


export default routes;