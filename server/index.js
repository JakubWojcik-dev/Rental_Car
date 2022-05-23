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
            }else{
                res.send({message: false})
            }
        }
        
        )
})

app.listen(3001,() =>{ 

    console.log("your server is running on port 3001!");
} )