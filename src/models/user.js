import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            args: [3, 255],
            msg: 'O nome deve possuir entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate:{
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate:{
          len:{
            args: [6, 15],
            msg: 'A senha deve possuir entre 6 e 15 caracteres',
          },
        },
      },
    },
    {
      sequelize,
    });

    // Add o hook e criar o hash
    this.addHook('beforeSave', async (user)=>{
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }

    });

    return this;
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
