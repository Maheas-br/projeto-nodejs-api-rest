const express = require('express')

const app  = express()

app.listen(3000, ()=>console.log('servidor rondando na porta 3000'))

app.get('/atendimentos',(req,res)=> res.send('Você esta na rota de atendimentos e está realizando um GET'))