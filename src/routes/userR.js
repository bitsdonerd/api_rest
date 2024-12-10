import { Router } from "express";
import  userController  from '../controllers/userC';
import loginRequire from "../middlewares/loginRequire";

const router = new Router();

router.post('/', userController.store);
router.put('/', loginRequire, userController.update);
router.delete('/', loginRequire, userController.delete);

// Rotas abaixo foram criadas apenas para um exemplo de CRUD
// As rotas abaixo não deveriam existir em um ambiente de produção
router.get('/', loginRequire, userController.index);
router.get('/:id', userController.show);


export default router;
