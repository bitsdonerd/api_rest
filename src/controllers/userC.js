import { password } from "../config/database";
import User from "../models/user";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json({novoUser});
    } catch(e){
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }

  }
}

export default new UserController();
