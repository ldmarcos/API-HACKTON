import express from 'express';
import * as AlunoController from '../controllers/alunoController.js';
const router = express.Router();

router.get('/', AlunoController.listarAlunos);
router.get('/:matricula', AlunoController.listaAlunoUnico);
router.post('/', AlunoController.cadastrarAluno);
router.put('/:matricula', AlunoController.atualizarAluno);
router.delete('/:matricula', AlunoController.deletarAluno);

export default router;
