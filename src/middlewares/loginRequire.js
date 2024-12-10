import jwt from 'jsonwebtoken';
import User from  '../models/user'

export default async (req, res, next)=> {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login required!']
    });
  }

  const [texto , token ] = authorization.split(' ');

  try {

    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Req do id do user em cada page
    const { id, email } = dados;

    // Checar se o user está na base de dados
    const user = await User.findOne({
      where: {
        id,
        email
      }
    })

    if(!user){
      return res.status(401).json({
        errors: ['Usuário inválido!']
      })
    }

    req.userID = id;
    req.userEmail = email;
    return next();

  }catch(e){
    return res.status(401).json({
      errors: ['Token expirado ou inválido!']
    });
  }

}
