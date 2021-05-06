module.exports = app =>{
    app.get('/atendimentos',(req,res)=> res.send('Você esta na rota de atendimentos e está realizando um GET'))
}