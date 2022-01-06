const expres = require('express')
const app = expres()
const db = require('./models')
const port = process.env.port || 3000;
app.use(expres.urlencoded({extended: true}));
app.use(expres.json());
app.get('/index.ejs',(req, res)=>{
    
    res.end()
})

app.listen(4000)