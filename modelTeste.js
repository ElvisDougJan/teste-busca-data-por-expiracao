const { model, Schema } = require('mongoose')

const TesteSchema = new Schema({
  email: {
    type: String,
    default: null
  },
  dataExp: {
    type: Date,
    required: true
  }
})

module.exports = model('teste', TesteSchema)