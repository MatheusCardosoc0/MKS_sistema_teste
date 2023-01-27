import React from 'react'
import { CardProductsInCart } from '../styles/CardProductsInCart'
import { CartMenuStyle } from '../styles/CartMenuStyle'
import Apple from "../../assets/apple-watch.png"
import { useSelector } from 'react-redux'
import { productsInCartArray } from '../../store/Products.store'

const CartMenu = ({close} : {close: () => void}) => {

  const productsInCart = useSelector(productsInCartArray)

  console.log(productsInCart.map(a => a))

  return (
    <CartMenuStyle close={close}
      totalPrice={220}>

      {productsInCart.map(product => (
        <CardProductsInCart imageUrl={Apple}
        title={"apple watch Series Gps"}
        add={() => { }}
        decrease={() => { }}
        price={500} />
      ))}

      

    </CartMenuStyle>
  )
}

export default CartMenu