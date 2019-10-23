const ModelTeste = require('./modelTeste')
const axios = require('axios')

async function mandaListaEmails(listaEmails) {
  await axios.post('http://localhost:4000/email-fake-api', listaEmails)
  // .then(res => console.log(res.data))
  // .catch(err => console.log(err))
}

async function buscaPorDataExpiracao() {
  return ModelTeste.find({})
    .where('dataExp')
    .lte(new Date())
    .then(async listaEmails => await mandaListaEmails(listaEmails))
    .catch(err => new Error(err))
}

module.exports = buscaPorDataExpiracao
