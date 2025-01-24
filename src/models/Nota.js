import mongoose from 'mongoose';

const notaSchema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true
    },
    turma: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turma',
        required: true
    },
    disciplina: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    versionKey: false
});

const nota = mongoose.model('Nota', notaSchema);

export { nota, notaSchema };
