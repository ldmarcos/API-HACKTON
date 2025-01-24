import mongoose from 'mongoose';

const professorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome do professor é obrigatório"],
    },
    turmas: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Turma',
        required: [true, "As turmas são obrigatórias para o professor"]
    }],
    disciplinas: [{ 
        type: String, 
        required: [true, "Pelo menos uma disciplina é obrigatória"] 
    }]
}, {
    versionKey: false
});

const professor = mongoose.model('Professor', professorSchema, 'professores');

export { professor, professorSchema };
