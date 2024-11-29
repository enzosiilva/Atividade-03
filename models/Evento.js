import mongoose, { mongo } from "mongoose";
import { participanteSchema } from "./Participante.js";


const eventoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    titulo: {type:String, required:true},
    descricao: {type:String},
    dataDoEvento: {type:Date},
    local: {type:String},
    participante: [participanteSchema]
},{versionKey: false})

const evento = mongoose.model('eventos', eventoSchema);

export default evento;