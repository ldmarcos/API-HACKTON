import { professor } from "../models/Professor.js" 

export const listarProfessores = async (req, res) => {
    try {
        const listaProfessores = await professor.find({});
        res.status(200).json(listaProfessores);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao listar os professores` });
    }
};

export const listaProfessorUnico = async (req, res) => {
    try {
        const id = req.params.id;
        const listaProfessor = await professor.findById(id);
        res.status(200).json(listaProfessor);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao listar o professor` });
    }
};

export const cadastrarProfessor = async (req, res) => {
    try {
        const novoProfessor = await professor.create(req.body);
        res.status(201).json({ message: 'Professor criado com sucesso', professor: novoProfessor });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao criar o professor` });
    }
};

export const atualizarProfessor = async (req, res) => {
    try {
        const id = req.params.id;
        const atualizaProfessor = await professor.findByIdAndUpdate(id, req.body);
        if (atualizaProfessor !== null) {
            res.status(200).send({ message: "Professor atualizado com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao atualizar o professor` });
    }
};

export const deletarProfessor = async (req, res) => {
    try {
        const id = req.params.id;
        const deletaProfessor = await professor.findByIdAndDelete(id, req.body);
        if (deletaProfessor !== null) {
            res.status(200).send({ message: "Professor removido com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao deletar o professor` });
    }
};
