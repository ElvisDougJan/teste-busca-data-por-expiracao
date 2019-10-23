const express = require('express')
const app = express()
const mongoose = require('mongoose')
const buscaPorDataExpiracao = require('./timerEmail')
// const { insertEmails } = require('./index')

setInterval(async () => {
  const hora = new Date().getHours()
  const minutos = new Date().getMinutes()

  if (hora === 22 && minutos === 54) {
    console.log('OIE')
    await buscaPorDataExpiracao()
  }
}, 60000)

// insertEmails()

mongoose.connect('mongodb://localhost:27017/teste', { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'))
