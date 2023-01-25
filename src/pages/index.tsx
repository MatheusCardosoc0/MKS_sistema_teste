import {
  Container, ProductsContainer,
} from '../components/styles/sharedstyles'
import Header from '../components/layaut/Navbar'
import CardProduct from '../components/styles/CardProduct'
import Apple from '../assets/apple-watch.png'

const a = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Home() {
  return (
    <ProductsContainer>

      {a.map(b => (
        <CardProduct
          title='Apple Watch Series 4 GPS'
          urlImage={Apple}
          price={120}
          description={"Redesigned from scratch and completely revised."} />
      ))}

    </ProductsContainer>
  )
}
