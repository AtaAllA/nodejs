
const express=require('express');
const fs=require("fs")
const app=express(); 
const cors=require('cors');
const { json } = require('express');
app.use(express.urlencoded({extended:true}))
app.use(cors()); 

app.use(function(req,res,next) 
{

console.log("hi in midelware")
next();
})

let usersRegister;

app.post('/register',function(req,res)
{
    console.log(req.body)
        // let html=fs.readFileSync("register.html",'utf-8');
        // res.send(html);

        if(req.body.Fname==''){
            res.send("Fname is required")
        }

        else if(req.body.Uname == ''){
            res.send("User name is required")
        }

        else if (req.body.pass == ''){
            res.send("Pass is required")
        }

        else{
            res.send(req.body)
            usersRegister = JSON.parse(fs.readFileSync('usersRegister' , 'utf-8'))
            console.log(usersRegister)
            usersRegister.push(req.body)
            fs.writeFileSync('userRegistration' , JSON.stringify(usersRegister))
        }
})



app.post('/login',function(req,res)
{
    usersRegister=JSON.parse(fs.readFileSync('userRegistration.txt' , 'utf-8'))
    console.log(req.body)
    console.log(usersRegister)
    var login = false
    var sms;

    usersRegister.forEach(element => {
        if(element.Uname == req.body.Uname && element.pass == req.body.pass){

            sms = {sms : "you are logged in ya zmely "}
        } 
        
    });

    if(login == true){
        res.send(JSON.stringify(sms))
    }

    else{
        res.send("laaaaaaaaaaaaaa  y cta ")
    }
})


app.get('/todos',function(req,res)

{
   let getTodos=JSON.parse(fs.readFileSync('todos.txt' , 'utf-8'))
        res.send(JSON.stringify(getTodos));
})



app.post('/todos' , function(req , res){

    let getTodos=JSON.parse(fs.readFileSync('todos.txt' , 'utf-8'))
    getTodos.push({mission:req.body.mission})

    fs.writeFileSync('todos.txt' , JSON.stringify(getTodos))

    res.send("yarab ykon sa7")


})


app.get('/todos/:id',function(req,res)

{  let  getTodosById=JSON.parse(fs.readFileSync('todos.txt' , 'utf-8'))

    res.send(getTodosById[parseInt(req.params.id)])
})


app.listen(7777,function()
{
    console.log('hi...')
})