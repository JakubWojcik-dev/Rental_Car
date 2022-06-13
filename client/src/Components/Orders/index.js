import React,{useState, useEffect} from 'react'
import Header from '../Header'
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import { Button, Center, Container, Div, Holder, Image, Input, InputPass,Tag  } from './OrdersStyles'
import sam1 from '../../samochod1.jpg'
import sam2 from '../../samochod2.jpg'
import sam3 from '../../samochod3.jpg'
import sam4 from '../../samochod4.jpg'
import sam5 from '../../samochod5.jpg'
import sam6 from '../../samochod6.jpg'
import sam7 from '../../samochod7.jpg'


const Order = () => {

    const {id} =useParams();
    const [data, setData] = useState([])
    const img =[sam1,sam2,sam3,sam4,sam5,sam6,sam7]

    useEffect(() =>{

        Axios.get(`http://localhost:3001/order/${id}`)
        .then(res =>{
          console.log(res.data)
          setData(res.data)
          
        })
        .catch(err =>{
          console.log(err)
        })
        
      },[])
  return (
    <div>
        <Header/>
        <Center>
        <Tag>Twoje zamówienia</Tag>
        </Center>
        
        
        { data.map((e) =>(
      
      <Container key={e.id}>
          <Image src={img[e.id_zdjecia-1]}/>
          <Div>
            <h1>{e.model}</h1>
            
            <h5>rocznik: {e.rocznik} rok</h5>
            <h5> ilość miejsc: {e.ilosc_miejsc}</h5>
            <h5> Cena wypożyczenia: {e.cena} zł</h5>
            <h5>data wynajmu:    {e.data_od.slice(0, 10)}   do    {e.data_do.slice(0, 10)}</h5>
            
          </Div>
          
             
             
              
         
      </Container>
       ))}
    </div>
  )
}

export default Order
