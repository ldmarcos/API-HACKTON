import { aluno } from "../models/Aluno.js" 

export const listarAlunos = async (req, res) => {
    try {
        const listaAlunos = await aluno.find({});
        res.status(200).json(listaAlunos);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao listar os alunos` });
    }
};

export const listaAlunoUnico = async (req, res) => {
    try {
        const matricula = req.params.matricula;
        const listaAluno = await aluno.findOne({ matricula: matricula });
        res.status(200).json(listaAluno);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao listar o aluno` });
    }
};

export const cadastrarAluno = async (req, res) => {
    try {
        const novoAluno = await aluno.create(req.body);
        res.status(201).json({ message: 'Aluno criado com sucesso', aluno: novoAluno });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao criar o aluno` });
    }
};

export const atualizarAluno = async (req, res) => {
    try {
        const matricula = req.params.matricula;
        const alunoEncontrado = await aluno.findOne({ matricula: matricula });

        if (!alunoEncontrado) {
            return res.status(404).json({ message: "Aluno não encontrado" });
        }
        console.log(alunoEncontrado._id)
        const atualizaAluno = await aluno.findByIdAndUpdate(alunoEncontrado._id, req.body);
        console.log(req.body)

        if (atualizaAluno) {
            res.status(200).send({ message: "Aluno atualizado com sucesso" });
        } else {
            res.status(500).json({ message: "Falha ao atualizar o aluno" });
        }

    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao atualizar o aluno` });
    }
};


export const deletarAluno = async (req, res) => {
    try {
        const matricula = req.params.matricula
        const alunoEncontrado = await aluno.findOne({matricula: matricula})
        const deletaAluno = await aluno.findByIdAndDelete(alunoEncontrado._id);
        if (deletaAluno !== null) {
            res.status(200).send({ message: "Aluno removido com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao deletar o aluno` });
    }
};
