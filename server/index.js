const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require("./api/routes/user")
const annoncRoute = require("./api/routes/annonc");
const dataBase = require('./api/config/dataBaseConfig');
app.use(cors());
app.use(express.json());

app.use("/", userRoute);

app.post("/tryLogin",(req,res) =>{

    const email = req.body.email;
    const password = req.body.password;

    dataBase.query(
        "SELECT * from users WHERE email = ? AND password = ?",
        [email, password],
        (err,result) =>{
            if(err){
                console.log(err);
            }
                
            if(result){
                res.send({message: true, result: result})
                console.log(err);
            }else{
                res.send({message: false})
                 console.log(err);
            }
        }
        
        )
})

app.get("/fetch",(req,res) =>{

    

    dataBase.query(
        "SELECT * from ogloszenia",
        (err,result) =>{
            if(err){
                console.log(err);
            }
                
            if(result){
               res.send(result)
            }
        }
        
        )
})

app.post("/register",(req,res) =>{
   
    const password = req.body.password;
    const email = req.body.email;
    

        dataBase.query("SELECT * from users where email = ?",
        [email] ,(err, result) =>{

           
            if(result.length > 0){
               
                res.send({message: "podany email jest już zajęty"})
            } else{
               
                dataBase.query("INSERT INTO users (email, password) VALUES (?,?)", 
                [
                email,
                password
                ], (err, result) =>{
                    if (err) {
                        console.log(err);
                    } else {
                        res.send({message: "Rejestracja przebiegła poprawnie"});
                    }
                })

            }

        })
    

    
})

app.get("/carInfo/:id" ,(req,res) =>{

    const id = req.params.id[2];
console.log(id);
    dataBase.query(
        "SELECT * from ogloszenia where id =?",[
            id
        ],
        (err,result) =>{
            if(err){
                console.log(err);
            }
                
            if(result){
               res.send(result)
               console.log(result);
            }
        }
       
        )
        console.log("tutaj");
})
app.listen(3001,() =>{ 

    console.log("your server is running on port 3001!");
} )