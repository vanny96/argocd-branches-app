const express = require('express')

const app = express()
const port = 3000

const enviorment = process.env["ARGOCD_BRANCHES_APP_ENV"]

app.get('/', (req, res) => {
    res.send(`Hello World from ${enviorment}!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})