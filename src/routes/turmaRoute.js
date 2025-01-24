import express from 'express';
import * as TurmaController from '../controllers/turmaController.js';
const router = express.Router();

router.get('/', TurmaController.listarTurmas);
router.get('/:id', TurmaController.listaTurmaUnica);
router.post('/', TurmaController.cadastrarTurma);
router.put('/:id', TurmaController.atualizarTurma);
router.delete('/:id', TurmaController.deletarTurma);

export default router;
