import React, { ReactNode, useState } from 'react'
import { Container } from '../styles/sharedstyles'
import CartMenu from './CartMenu'
import Footer from './Footer'
import Navbar from './Navbar'

const Layaut = ({ children }: { children: ReactNode }) => {

  const [opneMenu, setOpenMenu] = useState(false)

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