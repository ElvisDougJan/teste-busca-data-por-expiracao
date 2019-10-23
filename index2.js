const express = require('express')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

app.post('/email-fake-api', (req, res) => {
  console.log(`RECEBIDO OS EMAILS`, req.body)
  res.json('OK')
})

app.listen(4000, () => console.log('Api rodando em http://localhost:4000'))
