const express = require('express');
const newroutes = require('./routes/route.js')
const app = express();~

//Configurações
app.set('port', process.env.port || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado na porta: ' + app.get('port'));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 

//Middlewares
app.use(express.json());
//Rotas

 app.use('/bio',newroutes)


app.use('/teste', (req, res) => {
    res.send("RotaTESTE.");
    console.log("Start server on port111 " + app.get('port'))
});


app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'))
})