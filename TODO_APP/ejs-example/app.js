const bodyParser = require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
app.get('/',(req,res)=>
{
    res.render('login')
});
app.post('/submit',(req,res)=>
{
    const user=req.body.username;
    res.render('home',{name:user});
})
app.listen(5000,()=>
{
    console.log("running at http://localhost:5000")
})