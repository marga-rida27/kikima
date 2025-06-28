const express = require('express');
const newroutes = require('./routes/route.js')
const app = express();
//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Rotas

 app.use('/bio',newroutes)


app.use('/teste', (req, res) => {
    res.send("RotaTESTE.");
});
app.use('/', (req, res) => {
    res.send("Hello World");
});
app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'))
})