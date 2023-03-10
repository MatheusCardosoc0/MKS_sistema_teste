import { ProductsContainer } from '../components/styles/sharedstyles'
import CardProduct from '../components/styles/CardProduct'
import { useGetProductsQuery } from '../store/GetProducts'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../store/Products.store'
import Head from 'next/head'



export default function Home() {

  const { data, isFetching, error } = useGetProductsQuery()
  const dispatch = useDispatch()

  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <ProductsContainer>

      {isFetching || error ?
        Skeleton?.map(item => (
          <CardProduct key={item}
            title={"carregnado..."}
            urlImage={""}
            price={999999999}
            description={"carregando..."}
            addToCart={() => { }} />
        )) :
        data.products.map(item => (
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
