import { Router } from 'express';
import { DeputadoController } from '../controllers/deputadosController.js';

const router = Router();


router.get('/', DeputadoController.listar);


router.get('/:id', DeputadoController.buscarPorId);

export default router;