import React, { useEffect, useState } from 'react'
import { CardCart, NavbarContainer, Title } from '../styles/sharedstyles'
import Cart from '../../assets/Vector.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { productsInCartArray } from '../../store/Products.store'
import { GetTotalQuantity } from '../../utils/getValuesOfProductsInCart'

interface NavbarProps{
  event: () => void
};

const Navbar = ({event}: NavbarProps) => {

  const productsInCart = useSelector(productsInCartArray)
  const [totalProductsQuantity, setTotalProductsQuantity] = useState(0)

  
  useEffect(() => {
    GetTotalQuantity(productsInCart, setTotalProductsQuantity)
  },[productsInCart])

  return (
    <NavbarContainer>
      <Title>MKS
        <span>Sistemas</span>
      </Title>

      <CardCart onClick={event}>
        <Image src={Cart}
          alt="Simbolo de um carriinho de compras" />
          {totalProductsQuantity}
      </CardCart>
    </NavbarContainer>
  )
}

export default Navbar