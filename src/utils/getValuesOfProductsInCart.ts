import { InitialStateProps } from "./interfaces"

export function GetTotalQuantity(productsInCart: InitialStateProps[],setTotalProductsQuantity: React.Dispatch<React.SetStateAction<number>>  ){
  let value = 0
  productsInCart.map(product => {
    value += product.totalQuantity
  })
  setTotalProductsQuantity(value)
}



export  function InsertTotalValue(productsInCart: InitialStateProps[], setTotalValue:React.Dispatch<React.SetStateAction<number>>) {
  let value = 0
  productsInCart.map(product => {
    value += product.totalQuantity * product.product.price
  })
  setTotalValue(value)
}
