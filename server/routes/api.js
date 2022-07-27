const express = require('express')
const router = express.Router()
const Transaction = require('../model/transaction.js')
const transaction=require('../model/transaction.json')
router.use(express.json())
router.use(express.urlencoded({
    extended: false
}))

router.get("/transactions", async function (request, response) {
    let transaction=await Transaction.find({}).exec()
    response.send(transaction)
})

router.post('/transactionsJson', function (request, response) {
    let transactionObj={};
    transaction.map(tansData=>{
            transactionObj = new Transaction({
            amount: tansData.amount,
            vendor: tansData.vendor,
            category : tansData.category
        });

        transactionObj.save()
        response.end()
    })
    
})

router.post('/transactions', function (request, response) {
    let transaction=request.body
    let transactionObj={};
    console.log(transaction)
    transactionObj=new Transaction({
        amount: transaction.amountInput,
        vendor: transaction.categoryInput,
       category : transaction.vendorInput,
       currency:transaction.currencyInput
    })
    transactionObj.save()
    response.end()
})


router.delete('/transaction/:id', function (request, response) {
    Transaction.findOneAndDelete({ _id: request.params.id }).exec(async function (err, arr) {
        let transaction=await Transaction.find({}).exec()
        response.send(transaction)
    })

})



module.exports = router