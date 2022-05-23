const { response } = require("express");
const dataBase = require("../config/dataBaseConfig");
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");

module.exports ={

    get : (req,res)=>{

        dataBase.query("SELECT * from firmy", (err, result) =>{

            if(err){
                console.log(err);  
            }else{

                res.json( result);
                console.log();
                
            }
        })
    },

    message : (req,res)=>{

        res.json("Witamy na stronie głownej")
    },

    getLogin : (res, req) =>{

        const user = req.body.username;
        const password = req.body.password;
        console.log("zalogowano")
        dataBase.query(
            "SELECT * from users where user_login=?;",
            user,
            (err,result) =>{
                if(err){
                    res.json({error: err})
                }

                if(result.length > 0){
                    bcrypt.compare(password, result[0].user_pass, (err,response) =>{
                        if(response){
                            req.session.user = result;
                            console.log("response");
                            console.log( req.session.user);
                            
                            res.json(result);
                        } else{
                            res.json({message: "wrong user/name combination"})
                        }
                    })
                }
            }
        )  
    },

    login : (res,req) =>{

    }
}