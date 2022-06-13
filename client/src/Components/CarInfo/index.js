import React, { useState, useEffect } from 'react'
import Header from '../Header'
import imageCars from '../../cars4.jpg'
import { useNavigate } from "react-router-dom";
import { Button, Container, Div, Holder, Image, Input, InputPass } from './CarInfoStyles'
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

  const navigate = useNavigate();
  const {id} =useParams();
  const img =[sam1,sam2,sam3,sam4,sam5,sam6,sam7]
  const [data, setData] = useState([])
  const [finalDays, setFinalDays] = useState(1)
  const [firstDays, setFirstDays] = useState(1)
  const [timeDiff, setTimeDiff] = useState(0)
  const[login,setLogin] =useState([])
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

    const locallogin = JSON.parse(localStorage.getItem("name"))
    console.log(locallogin[0].id);
    if(locallogin){
    
     setLogin(locallogin[0].id)
      
      
    }
    
  },[])

  useEffect(() =>{

    
    const d1 = new Date(finalDays)
    const d2 = new Date(firstDays)

    const time = Math.abs(d2 - d1)
    const days = Math.ceil(time / (1000*60*60*24))
    setTimeDiff(days)
    console.log(days);

  },[finalDays,firstDays])
  const order = () =>{
    
    Axios.post("http://localhost:3001/order", {
      model: data.model,
      ilość_miejsc: data.ilość_miejsc,
      cena:(timeDiff+1) *data.cena,
      data_od: firstDays,
      data_do: finalDays,
      rocznik: data.rocznik,
      id_klienta: login,
      id_zdjecia: data.id  
  }).then((response) => {

      if(response.status == 200){
       navigate("/")
      }
   
  })
  }
 
  return (
   <>
      <Header/>
       <Container>
     
    <Image src={img[data.id -1]}/>
     <Div>
        <h1> {data.model}</h1>
         
         <h3><a>Cena za dobe: {data.cena}zł</a></h3>
        <h3><a>Paliwo: {data.paliwo}</a></h3>
        <h3><a>Rocznik samochodu :{data.rocznik}</a></h3> 
         <h3><a>Moc silnika :{data.konie} km</a></h3> 
         <h3><a>Ilość miejsc :{data.ilość_miejsc}</a></h3>   
         <Holder>
         <Input
         type="date"
         value={firstDays}
        onChange={(e) => setFirstDays(e.target.value)}
        />
          <Input
         type="date"
         value={finalDays}
        onChange={(e) => setFinalDays(e.target.value)}
        />
        </Holder>       
      <h3><a>cena: {(timeDiff+1) *data.cena}zł</a></h3>
 <Button onClick={order}>Złóż zamówienie</Button> 
         
     </Div>
    
     </Container>
    
     </>
  )
}
export default CarInfo
