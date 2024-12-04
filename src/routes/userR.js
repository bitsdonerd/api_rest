import { Router } from "express";
import  UserController  from '../controllers/userC';

const router = new Router();

router.post('/', UserController.store);

export default router;
