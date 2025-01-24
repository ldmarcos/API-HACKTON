import express from 'express';
import * as NotaController from '../controllers/notaController.js';
const router = express.Router();

router.get('/', NotaController.listarNotas);
router.get('/:id', NotaController.listaNotaUnica);
router.post('/:matricula', NotaController.cadastrarNota);
router.put('/:id', NotaController.atualizarNota);
router.delete('/:id', NotaController.deletarNota);

export default router;
