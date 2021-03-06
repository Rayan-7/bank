const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URL||'mongodb://host.docker.internal:27017/bankDb', { useNewUrlParser: true })

const transactionSchema = new Schema({
    amount : Number,
    category : String,
    vendor : String,
    Currency:String
})

const Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction