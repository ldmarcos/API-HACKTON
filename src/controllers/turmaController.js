import { turma } from "../models/Turma.js" 
import { professor } from "../models/Professor.js";
export const listarTurmas = async (req, res) => {
    try {
        const listaTurmas = await turma.find({})
        .populate('alunos', 'nome')
        .populate('professores');
        console.log(listaTurmas)
        if (!turma) {
            return res.status(404).send('Turma não encontrada');
        }

        res.status(200).json(listaTurmas);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao listar as turmas` });
    }
};

export const listaTurmaUnica = async (req, res) => {
    try {
        const id = req.params.id;
        const listaTurma = await turma.findById(id);
        res.status(200).json(listaTurma);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao listar a turma` });
    }
};

export const cadastrarTurma = async (req, res) => {
    try {
        const novaTurma = await turma.create(req.body);
        res.status(201).json({ message: 'Turma criada com sucesso', turma: novaTurma });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao criar a turma` });
    }
};

export const atualizarTurma = async (req, res) => {
    try {
        const id = req.params.id;
        const atualizaTurma = await turma.findByIdAndUpdate(id, req.body);
        if (atualizaTurma !== null) {
            res.status(200).send({ message: "Turma atualizada com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao atualizar a turma` });
    }
};

export const deletarTurma = async (req, res) => {
    try {
        const id = req.params.id;
        const deletaTurma = await turma.findByIdAndDelete(id, req.body);
        if (deletaTurma !== null) {
            res.status(200).send({ message: "Turma removida com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao deletar a turma` });
    }
};
