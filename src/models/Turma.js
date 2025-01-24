import mongoose from "mongoose";

const turmaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    ano: {
        type: Number,
        required: true
    },
    disciplinas: [{
        type: String, 
        required: true
    }],
    professores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }],
    alunos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true
    }]
}, {
    versionKey: false
});

const turma = mongoose.model('Turma', turmaSchema);

export { turma, turmaSchema };
