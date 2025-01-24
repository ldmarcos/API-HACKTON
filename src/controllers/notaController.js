import { nota } from "../models/Nota.js" 
import { aluno } from "../models/Aluno.js";

export const listarNotas = async (req, res) => {
    try {
        const listaNotas = await nota.find({});
        res.status(200).json(listaNotas);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao listar as notas` });
    }
};

export const listaNotaUnica = async (req, res) => {
    try {
        const id = req.params.id;
        const listaNota = await nota.findById(id);
        res.status(200).json(listaNota);
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao listar a nota` });
    }
};

export const cadastrarNota = async (req, res) => {
    try {
        const matricula = req.params.matricula;

        const alunoEncontrado = await aluno.findOne({ matricula: matricula });

        if (!alunoEncontrado) {
            return res.status(404).json({ message: 'Aluno não encontrado com essa matrícula' });
        }
        
        const novaNota = await nota.create({
            alunoEncontrado:aluno._id, 
            ...req.body
        });
        
        res.status(201).json({ message: 'Nota criada com sucesso', nota: novaNota });
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao criar a nota` });
    }
};

export const atualizarNota = async (req, res) => {
    try {
        const id = req.params.id;
        const atualizaNota = await nota.findByIdAndUpdate(id, req.body);
        if (atualizaNota !== null) {
            res.status(200).send({ message: "Nota atualizada com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao atualizar a nota` });
    }
};

export const deletarNota = async (req, res) => {
    try {
        const id = req.params.id;
        const deletaNota = await nota.findByIdAndDelete(id, req.body);
        if (deletaNota !== null) {
            res.status(200).send({ message: "Nota removida com sucesso" });
        } else {
            throw error;
        }
    } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao deletar a nota` });
    }
};
