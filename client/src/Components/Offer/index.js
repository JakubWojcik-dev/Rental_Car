import React from 'react'
import Header from '../Header'
import { Container, Image } from './OfferStyles'
import imageCars from '../../cars4.jpg'

export const Offer = () => {
  return (
    <>
    <Header/>
    <Container>
        <Image src={imageCars}/>
        <h3>Volkswagen Golf</h3>
    </Container>
    </>
  )
}
