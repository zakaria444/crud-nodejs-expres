const expres = require('express')
const app = expres()
const db = require('./models')
const port = process.env.port || 3000;
app.use(expres.urlencoded({extended: true}));
app.use(expres.json());

const apiRoutes = require('./routes/apiRoutes');
app.use("/api", apiRoutes);

db.sequelize.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log(`is runiing ${port}`);
    })
})









app.get('/index.ejs',(req, res)=>{
    
    res.end()
})

app.listen(4000)