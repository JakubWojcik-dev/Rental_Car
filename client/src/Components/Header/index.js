import React from "react";
import { Context, Main, Button, Container, Image, Absolute } from "./HeaderStyles";
import scrollToComponent from 'react-scroll-to-component';
import imageCars from '../../auto_car-16.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Error from "../Error";
const Header = () =>{

    const navigate = useNavigate()
    return(
      <Absolute>
        <Main>
            <Context>
            <Image src={imageCars} onClick={() =>{navigate("/")}}/>
                <h1 onClick={() =>{navigate("/")}}>Rent </h1>
                <h2 onClick={() =>{navigate("/")}}>Car </h2>
               
            </Context>

            <Container>
                <h4 onClick={() => {navigate("/offer")}}>Oferta</h4>
                <h4 >O nas</h4>
                <h4>Kontakt</h4>
                
            </Container> 

            <Container>
                <Button onClick={() => {navigate("/login")}}>
                    <h3>Zaloguj się</h3>
                </Button>
                <Button onClick={() =>{navigate("/login")}}>
                    <h3>Rejestracja</h3>
                </Button>
            </Container>
        </Main>
        </Absolute>     
        
    )

}

export default Header