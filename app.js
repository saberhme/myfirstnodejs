const {saber} = require ("./app1")
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
  }));
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
//new configuration parameter
extname: 'hbs'
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});


app.get('/go', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('go', { owner:saber, layout : 'index'});
    });


    app.post('/calculer', (req, res) => {
        let num1 = req.body.num1;
        let num2 = req.body.num2;
        let result = parseInt(num1) + parseInt(num2) ;
        res.render('go', { result, owner:saber, layout : 'index'});
        });
    
    
app.listen(port, () => console.log(`App listening to port ${port}`));