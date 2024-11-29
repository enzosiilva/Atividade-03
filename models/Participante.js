import mongoose from "mongoose";

const participanteSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  curso: { type: String }
}, { versionKey: false });

const participante = mongoose.model("participantes", participanteSchema);

export { participante, participanteSchema };