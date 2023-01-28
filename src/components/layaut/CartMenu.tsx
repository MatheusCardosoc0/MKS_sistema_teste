import React, { useEffect, useState } from 'react'
import { CardProductsInCart } from '../styles/CardProductsInCart'
import { CartMenuStyle } from '../styles/CartMenuStyle'
import Apple from "../../assets/apple-watch.png"
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, deleteProductToCart, productsInCartArray, removeProductToCart } from '../../store/Products.store'

const CartMenu = ({close} : {close: () => void}) => {

  const productsInCart = useSelector(productsInCartArray)
  const [totalValue, setTotalValue] = useState(0)

  console.log(productsInCart)

  const dispatch = useDispatch()


  function InsertTotalValue() {
    let value = 0
    productsInCart.map(product => {
      value += product.totalQuantity * product.product.price
    })
    setTotalValue(value)
  }

  useEffect(() => {
    InsertTotalValue()
  }, [productsInCart])

  return (
    <CartMenuStyle close={close}
      totalPrice={totalValue}>

      {productsInCart.map(product => (
        <CardProductsInCart key={product.product.id}
        imageUrl={product.product.photo}
        quantity={product.totalQuantity}
        title={product.product.name}
        addToCart={() => dispatch(addProductToCart(product))}
        decreaseToCart={() => dispatch(removeProductToCart(product))}
        price={product.product.price * product.totalQuantity}
        removeProductToCart={() => dispatch(deleteProductToCart(product))} />
      ))}

      

    </CartMenuStyle>
  )
}

export default CartMenu