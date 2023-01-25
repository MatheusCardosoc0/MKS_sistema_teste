import React, { ReactNode, useState } from 'react'
import { Container } from '../styles/sharedstyles'
import CartMenu from './CartMenu'
import Footer from './Footer'
import Navbar from './Navbar'

const Layaut = ({ children }: { children: ReactNode }) => {

  const [opneMenu, setOpenMenu] = useState(false)

  console.log(opneMenu)

  return (
    <Container>
      <Navbar event={() => setOpenMenu(!opneMenu)} />

      {opneMenu && (
        <CartMenu></CartMenu>
      )}

      <main>
        {children}
      </main>

      <Footer />
    </Container>
  )
}

export default Layaut