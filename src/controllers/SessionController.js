const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.create({ email });

    return res.json(user);
  },
};

// index = todos os itens
// show = somente 1 item
// store = salvar itens
// update = alterar 1 item
// destroy = excluir 1 item
