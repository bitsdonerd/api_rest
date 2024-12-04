import Sequelize, { Model } from 'sequelize';

export default class Entregas extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
      bloco: Sequelize.STRING,
      apartamento: Sequelize.STRING,
      email: Sequelize.STRING,
    },{
      sequelize,
    });
    return this;
  }
}

