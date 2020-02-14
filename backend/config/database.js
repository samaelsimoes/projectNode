//configurando conexao com banco de dados mongodb
const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = " O atributo '{PATH}' é obrigatório "