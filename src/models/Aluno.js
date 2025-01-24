import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema({
    matricula: {
        type: String,
        required: [true, "Número de matrícula obrigatório"],
        unique: true
    },
    nome: {
        type: String,
        required: [true, "O nome do aluno é obrigatório"]
    },
    nascimento: { 
        type: Date,
        required: [true, "A data de nascimento é obrigatória"]
    },
    turma: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turma',
        required: [true, "A turma do aluno é obrigatória"]
    },
}, {
    versionKey: false
});

const aluno = mongoose.model('Aluno', alunoSchema);

export { aluno, alunoSchema };
