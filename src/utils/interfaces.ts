export interface Product{
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface QueryProducts{
  count: number
  products: Product[]
}

export interface InitialStateProps{
  product: Product
  totalQuantity: number
  totalValueOfThisProduct: number
}