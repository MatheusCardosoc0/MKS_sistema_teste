import { configureStore} from "@reduxjs/toolkit";
import { ApiProducts } from "./GetProducts";
import productCartLogic from './Products.store'

export const store = configureStore({
  reducer: {
    [ApiProducts.reducerPath]: ApiProducts.reducer,
    productCartLogic,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiProducts.middleware)
})