import express from 'express';
import * as ProfessorController from '../controllers/professorController.js';
const router = express.Router();

router.get('/', ProfessorController.listarProfessores);
router.get('/:id', ProfessorController.listaProfessorUnico);
router.post('/', ProfessorController.cadastrarProfessor);
router.put('/:id', ProfessorController.atualizarProfessor);
router.delete('/:id', ProfessorController.deletarProfessor);

export default router;
