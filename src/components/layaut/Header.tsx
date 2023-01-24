import React from 'react'
import { CardCart, NavbarContainer, Title } from '../styles/sharedstyles'
import Cart from '../../assets/Vector.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <NavbarContainer>
      <Title>MKS
        <span>Sistemas</span>
      </Title>

      <CardCart >
        <Image src={Cart}
          alt="Simbolo de um carriinho de compras" />

          0
      </CardCart>
    </NavbarContainer>
  )
}

export default Header