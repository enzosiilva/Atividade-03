import { participante } from "../model/Participante.js";


class ParticipanteController {

  static async listarParticipantes (req, res) {
    try {
      const listaParticipantes = await participante.find({});
      res.status(200).json(listaParticipantes);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarParticipantePorId (req, res) {
    try {
      const id = req.params.id;
      const participanteEncontrado = await participante.findById(id);
      res.status(200).json(participanteEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
    }
  };

  static async cadastrarParticipante (req, res) {
    try {
      const novoParticipante = await participante.create(req.body);
      res.status(201).json({ message: "criado com sucesso", evento: novoParticipante });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar participante` });
    }
  }

  static async atualizarParticipante (req, res) {
    try {
      const id = req.params.id;
      await participante.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "participante atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirParticipante (req, res) {
    try {
      const id = req.params.id;
      await participante.findByIdAndDelete(id);
      res.status(200).json({ message: "participante excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default ParticipanteController;
