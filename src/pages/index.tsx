import {
  Container, ProductsContainer,
} from '../components/styles/sharedstyles'
import Header from '../components/layaut/Navbar'
import CardProduct from '../components/styles/CardProduct'
import Apple from '../assets/apple-watch.png'
import { useGetProductsQuery } from '../store/GetProducts'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/Products.store'

const a = [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * 
 */

export default function Home() {

  const { data, isFetching, error } = useGetProductsQuery()
  const dispatch = useDispatch()

  if (isFetching) return ''

  if (error) return ''

  return (
    <ProductsContainer>
      {data.products.map(item => (
        <CardProduct key={item.id}
          title={item.name}
          urlImage={item.photo}
          price={item.price}
          description={item.description}
          addToCart={() => dispatch(addProductToCart({
            product: item,
            totalQuantity: 1,
            totalValueOfThisProduct: item.price
          }))} />
      ))}

    </ProductsContainer>
  )
}
