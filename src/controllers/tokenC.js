import User from '../models/user'

class TokenController {
  async store(req, res){
    res.json('OK');
  }
}

export default new TokenController();
