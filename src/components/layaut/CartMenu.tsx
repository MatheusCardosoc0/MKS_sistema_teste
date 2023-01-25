import React from 'react'
import { CardProductsInCart } from '../styles/CardProductsInCart'
import { CartMenuStyle } from '../styles/CartMenuStyle'
import Apple from "../../assets/apple-watch.png"

const CartMenu = ({close} : {close: () => void}) => {
  return (
    <CartMenuStyle close={close}
      totalPrice={220}>

      <CardProductsInCart imageUrl={Apple}
        title={"apple watch Series Gps"}
        add={() => { }}
        decrease={() => { }}
        price={500} />

      <CardProductsInCart imageUrl={Apple}
        title={"apple watch Series Gps"}
        add={() => { }}
        decrease={() => { }}
        price={500} />


      <CardProductsInCart imageUrl={Apple}
        title={"apple watch Series Gps"}
        add={() => { }}
        decrease={() => { }}
        price={500} />


      <CardProductsInCart imageUrl={Apple}
        title={"apple watch Series Gps"}
        add={() => { }}
        decrease={() => { }}
        price={500} />

    </CartMenuStyle>
  )
}

export default CartMenu