const ModelTeste = require('./modelTeste')

exports.insertEmails = async () => {
  for (let i = 0; i < 5000; i++) {
    await ModelTeste.create({
      email: `email_num_${i}@email.com`,
      dataExp: new Date()
    })
      .then(emailSaved => console.log(emailSaved))
      .catch(err => console.log(err))
  }
}
