import Entregas from "../models/pacotes";

class HomeController {
  async index(req, res) {
    const novoPacote = await Entregas.create({
      nome: 'Lucas Martins',
      bloco: 'C',
      apartamento: '10',
      email: 'lukasousa70@gmail.com',
    });
    res.json({novoPacote});
  }
}

export default new HomeController();
