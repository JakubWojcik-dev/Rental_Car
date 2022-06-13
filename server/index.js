const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require("nodemailer");
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


app.post("/order",(req,res) =>{
   
   
    const model = req.body.model;
    const ilosc_miejsc = req.body.ilość_miejsc;
    const cena = req.body.cena;
    const data_od = req.body.data_od
    const data_do =  req.body.data_do
    const rocznik = req.body.rocznik
    const id_klienta = req.body.id_klienta  
    const id_zdjecia = req.body.id_zdjecia
       
        
        dataBase.query("INSERT INTO zamowienia (model, ilosc_miejsc, cena, data_od, data_do, rocznik, id_klienta,id_zdjecia) VALUES (?,?,?,?,?,?,?,?)", 
        [
            model,
            ilosc_miejsc,
            cena,
            data_od, 
            data_do, 
            rocznik, 
            id_klienta,
            id_zdjecia
        ], (err, result) =>{
            if (err) {
                console.log(err);
            } else {
                console.log("wszystko git");
                res.send(result)
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

app.get("/order/:id" ,(req,res) =>{

    const id = req.params.id[1];
console.log(id);
    dataBase.query(
        "SELECT * from zamowienia where id_klienta =?",[
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


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "jakub-mail1@o2.pl", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);