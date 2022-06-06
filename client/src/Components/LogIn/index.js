import React, { useState } from "react";
import Header from "../Header";
import { Container, DarkBox, LightBox, LogButton,Image, ButtonMedia, ImageMedia,Line, Holder, LogButtonChecked, Label, InputEmail, InputPass, Reminder, ConfirmButton } from "./LogInStyles";
import imageCars from '../../cars3.jpg'
import Google from '../../google.png'
import Facebook from '../../facebook.png'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () =>{


    const navigate = useNavigate();

    const [isRegistered, setIsRegistered] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const [isLogged, setIsLogged] = useState({error: false,message: ""})
const [isReg, setIsReg] = useState({error: 0,message: ""})
    const changeButton = () =>{
        setIsRegistered(!isRegistered)
    }

    const tryLogin = () =>{
        console.log(isRegistered)
        !isRegistered ?
        Axios.post("http://localhost:3001/tryLogin", {
            email: email,
            password: password,
        }).then((response) => {

            console.log(response.data)
            console.log(response.data.result.length > 0)
            if(response.data.result.length > 0){
                setIsLogged({error: true,message: "Poprawne zalogowanie"})
                localStorage.setItem("name",JSON.stringify(response.data.result))
                navigate("/");
            }else{
                setIsLogged({error: false,message: "Podano zły login/hasło"})
            }
            console.log(isLogged)
        }) :
        console.log("o tutaj");

        if(email !== "" && password !== ""){

        Axios.post("http://localhost:3001/register", {
            email: email,
            password: password,
        }).then((response) => {

            setIsReg({error: 1, message:"Rejestracja przebiegła pomyślnie"})
        })
    }else{
        setIsReg({error: 2, message:"oba pola muszą być wypełnione"})
        console.log("blad");
    }

    }
    return (
        <>
            <Image src={imageCars}/>
            <Container>
                <h1>Zaloguj się aby kontynuować</h1>
                <ButtonMedia>
                    <ImageMedia src={Google}/>
                    <a> Zaloguj się z Google</a>
                </ButtonMedia>

                <ButtonMedia>
                    <ImageMedia src={Facebook}/>
                    <a> Zaloguj się przez Facebook</a></ButtonMedia>
                <Holder>
                    <Line/>
                    <a>LUB</a>
                    <Line/>  
                </Holder> 

                { isRegistered ?<Holder><LogButton onClick={changeButton}>Zaloguj sie</LogButton> <LogButtonChecked onClick={changeButton}>Utwórz konto</LogButtonChecked></Holder> :
                <Holder><LogButtonChecked onClick={changeButton}>Zaloguj sie</LogButtonChecked><LogButton onClick={changeButton}>Utwórz konto</LogButton></Holder>}
                
                <Label>E-mail</Label>
                <InputEmail
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Hasło</Label>
                <InputPass
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />          

                <Holder><Reminder>Nie pamiętasz hasła?</Reminder></Holder>
                <ConfirmButton onClick={tryLogin}> {!isRegistered ? "Zaloguj się" : "Rejestracja"}</ConfirmButton>
                {!isLogged.error && <h3>{isLogged.message}</h3>}
                {isReg.error == 2 && <h3>{isReg.message}</h3>}
                {isReg.error == 1 && <h3>{isReg.message}</h3>}
            </Container>
        </>
        

    )
}

export default Login