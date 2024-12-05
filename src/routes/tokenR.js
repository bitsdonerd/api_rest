import { Router } from "express";
import  TokenController  from '../controllers/tokenC';

const router = new Router();

router.post('/', TokenController.store);

export default router;
