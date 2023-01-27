import React, { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux'
import { productsInCartArray } from '../../store/Products.store'
import { Container } from '../styles/sharedstyles'
import CartMenu from './CartMenu'
import Footer from './Footer'
import Navbar from './Navbar'

const Layaut = ({ children }: { children: ReactNode }) => {

  const [opneMenu, setOpenMenu] = useState(false)

  const productsInCart = useSelector(productsInCartArray)

  console.log(productsInCart)


  console.log(opneMenu)

  return (
    <Container>
      <Navbar event={() => setOpenMenu(true)} />

      {opneMenu && (
        <CartMenu close={() => setOpenMenu(false)} />
      )}


      {children}


      <Footer />
    </Container>
  )
}

export default Layaut