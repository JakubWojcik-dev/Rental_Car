import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Container, Image, Div, Button} from './OfferStyles'
import imageCars from '../../cars4.jpg'
import sam1 from '../../samochod1.jpg'
import sam2 from '../../samochod2.jpg'
import sam3 from '../../samochod3.jpg'
import sam4 from '../../samochod4.jpg'
import sam5 from '../../samochod5.jpg'
import sam6 from '../../samochod6.jpg'
import sam7 from '../../samochod7.jpg'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
export const Offer = () => {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const img =[sam1,sam2,sam3,sam4,sam5,sam6,sam7]
 useEffect(() =>{

    Axios.get("http://localhost:3001/fetch")
    .then(res =>{
      console.log(res.data)
      setData(res.data)
      console.log(data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <>
    <Header/>

    
    { data.map((e) =>(
      
    <Container key={e.id}>
        <Image src={img[e.id-1]}/>
        <Div>
          <h1>{e.model}</h1>
          <h5> Cena za dobe: {e.cena} zł</h5>
          <h5>rocznik: {e.rocznik} rok</h5>
          <Button onClick={() => {navigate(`/carInfo/: ${e.id}`)}}>Wybierz</Button>
        </Div>
        
           
           
            
       
    </Container>
     ))}
    </>
  )
}
