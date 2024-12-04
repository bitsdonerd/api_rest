import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Entregas from "../models/pacotes";
import User from "../models/user";

const models = [Entregas, User];


const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
