import React from "react";
import { About, Center, Image, Topic } from "./ContentStyles";
import imageCars from '../../cars1.jpg'
import Header from "../Header";
import Error from "../Error";


const Content = () =>{
    return(
        <>
            <Header/>
            <Image src={imageCars}/>
            <Topic>Car Passion</Topic>
            
        </>
        
    )

}

export default Content