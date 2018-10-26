const express = require('express');
const app = express()
const routes = require('./routes');
const port = 8000;
const session = require('express-session')


app.use(session( {secret: 'keyboard dog' , resave:false, saveUninitialized: false})) 
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/', routes);
app.listen(port, () => {
console.log(`listening on port ${port}`); 
})