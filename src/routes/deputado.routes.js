import { Router } from 'express';
import { DeputadoController } from '../controller/deputado.controller.js';

const router = Router();


router.get('/', DeputadoController.listar);


router.get('/:id', DeputadoController.buscarPorId);

export default router;