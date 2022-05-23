import React, { useState } from "react";
import Header from "../Header";
import { Container, DarkBox, LightBox, LogButton,Image, ButtonMedia, ImageMedia,Line, Holder, LogButtonChecked, Label, InputEmail, InputPass, Reminder, ConfirmButton } from "./LogInStyles";
import imageCars from '../../cars3.jpg'
import Google from '../../google.png'
import Facebook from '../../facebook.png'
import Axios from 'axios'
const Login = () =>{

    const [isRegistered, setIsRegistered] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const [isLogged, setIsLogged] = useState(false)
    const changeButton = () =>{
        setIsRegistered(!isRegistered)
    }

    const tryLogin = () =>{
        console.log(isLogged)
        Axios.post("http://localhost:3001/tryLogin", {
            email: email,
            password: password,
        }).then((response) => {

            console.log(response.data.message)
            if(response.data.message == true){
                setIsLogged(true)
            }else{
                setIsLogged(false)
            }
            console.log(isLogged)
        })


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
                <ConfirmButton onClick={tryLogin}> Zaloguj się</ConfirmButton>
                {isLogged && <h3>Udało się zalogować</h3>}
            </Container>
        </>
        

    )
}

export default Login