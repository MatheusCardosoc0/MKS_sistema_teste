import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../utils/interfaces";

interface InitialStateProps{
  product: Product
  totalQuantity: number
  totalValueOfThisProduct: number
}

const initialState: InitialStateProps[] = []

const cartProductLogic = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addProductToCart(state, {payload} : PayloadAction<InitialStateProps> ){
      const checkProduct = state.find(item => item.product.id === payload.product.id);

      if(checkProduct){
        state.map(item => {
          if(item.product.id === payload.product.id){
            if(!item.totalQuantity){
              item.totalQuantity = 1
              return {...item}
            } else {
              item.totalQuantity += 1
              item.totalValueOfThisProduct += item.product.price
              return {...item}
            }
          }
        })
      }else {
        return [...state, payload]
      }
     
    },
    deleteProductToCart(state, {payload}: PayloadAction<InitialStateProps>){
      return state.filter(item => item.product.id !== payload.product.id)
    },
    removeProductToCart(state, {payload}: PayloadAction<InitialStateProps>){
        if(payload.totalQuantity == 1){
          return state.filter(item => item.product.id !== payload.product.id)
        } else {
          state.map(item => {
            if(item.product.id === payload.product.id){
                item.totalQuantity -= 1
                item.totalValueOfThisProduct -= item.product.price
                return { ...item}                           
                }
            });
          }
    }  
  },
})

export const {addProductToCart, deleteProductToCart,removeProductToCart} = cartProductLogic.actions
export default cartProductLogic.reducer

export const productsInCartArray = (state: any) => {
  return state.productCartLogic as Product[]
}