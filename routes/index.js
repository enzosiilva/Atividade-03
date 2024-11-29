import express from "express";
import livros from "./eventosRoutes.js";
import autores from "./participantesRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) =>
        res.status(200).send('Bem vindo ao node.js'));
    app.use(express.json(), eventos, participantes);
}

export default routes