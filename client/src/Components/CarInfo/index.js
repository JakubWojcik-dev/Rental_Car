import React, { useState, useEffect } from 'react'
import Header from '../Header'
import imageCars from '../../cars4.jpg'
import { Button, Container, Div, Image, Input, InputPass } from './CarInfoStyles'
import { useParams } from 'react-router-dom'
import sam1 from '../../samochod1.jpg'
import sam2 from '../../samochod2.jpg'
import sam3 from '../../samochod3.jpg'
import sam4 from '../../samochod4.jpg'
import sam5 from '../../samochod5.jpg'
import sam6 from '../../samochod6.jpg'
import sam7 from '../../samochod7.jpg'
import Axios from 'axios'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)




export const CarInfo = () => {

  const {id} =useParams();
  const img =[sam1,sam2,sam3,sam4,sam5,sam6,sam7]
  const [data, setData] = useState([])
  const [days, setDays] = useState(1)
  useEffect(() =>{

    Axios.get(`http://localhost:3001/carInfo/${id}`)
    .then(res =>{
      console.log(res.data[0])
      setData(res.data[0])
      console.log("carinfo")
      console.log(data.id)
      console.log(data.model)
     //console.log(data[0].model)
    })
    .catch(err =>{
      console.log(err)
    })
    
  },[])

  const kliknij = () =>{
    console.log("klik")
  }
 
  return (
  <>
      <Container>
       <Header/>
    <Image src={img[data.id -1]}/>
    <Div>
        <h1> {data.model}</h1>
         
        <h3><a>Cena za dobe: {data.cena}zł</a></h3>
        <h3><a>Paliwo: {data.paliwo}</a></h3>
        <h3><a>Rocznik samochodu :{data.rocznik}</a></h3> 
        <h3><a>Moc silnika :{data.konie}</a></h3> 
        <h3><a>Ilość miejsc :{data.ilość_miejsc}</a></h3> 
        <Input
        value={days}
        onChange={(e) => setDays(e.target.value)}
        />
<Button onClick={kliknij}>Złóż zamówienie</Button> 
         
    </Div>
    
    </Container>
    <Button onClick={kliknij}>Złóż zamówienie</Button> 
    </>
  )
}
export default CarInfo
