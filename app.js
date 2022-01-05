const expres = require('express')

const app = expres()


app.get('/index.ejs',(req, res)=>{
    
    res.end()
})

app.listen(4000)