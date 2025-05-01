const bodyParser = require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
var tasks=[];//an empty array
app.get('/',(req,res)=>
{
    res.render('login');
})
app.get('/todo',(req,res)=>
{
    const list_task=tasks.map(task=>`<li>${task} 
        <form action="/delete" method="POST">
        <input name="task_delete" value="${task}" type="hidden"/>
        <button type="submit">DELETE</button>
        </form>
         </li>`).join(' ');
    res.render('task',{task:list_task});
});
app.post('/addtask',(req,res)=>
{
    tasks.push(req.body.ENTEREDTASK);
    res.redirect('/todo');
});
app.post('/delete',(req,res)=>
{
    const dtask=req.body.task_delete;
    tasks.splice(tasks.indexOf(dtask),1);
    console.log(tasks.indexOf(dtask));

    res.redirect("/todo");
})
app.listen(9000,()=>
{
    console.log("http://localhost:9000")
});
module.exports=app;