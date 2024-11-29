import express from "express";
import AutorController from "../controllers/participanteController.js";

const routes = express.Router();

routes.get("/participante", ParticipanteController.listarParticipante);
routes.get("/participante/:id", ParticipanteController.listarParticipantePorId);
routes.post("/participante", ParticipanteController.cadastrarParticipante);
routes.put("/participante/:id", ParticipanteController.atualizarParticipante);
routes.delete("/participantes/:id", ParticipanteController.excluirParticipante);

export default routes;
