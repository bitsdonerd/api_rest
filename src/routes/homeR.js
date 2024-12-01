import { Router } from "express";
import  HomeController  from '../controllers/homeC';

const router = new Router();

router.get('/', HomeController.index);

export default router;

