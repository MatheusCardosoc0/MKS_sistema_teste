import Image from "next/image";
import styled from "styled-components";
import addIcon from '../../assets/+.svg';
import decreaseIcon from '../../assets/-.svg';



const CardProductsInCartContainer = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  align-items: center;
  color: #000000;
  gap: 28px;

  p{
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
  }

  h3{
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    color: #2c2c2c
  }
`

const QuantityProductButton = styled.div`
  p{
    font-size: 8px;
    font-weight: 400;
    line-height: 6px;
    margin-bottom: 4px;
  }
  span{
    border-radius: 8px;
    color: #2c2c2c2c;
    display: flex;
    border: 1px solid #BFBFBF;
    overflow: hidden;
    padding: 8px;
    justify-content: center;

    button{
      border: none;
      background-color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
  }
  }
`

interface CardProductsInCartProps {
  title: string
  price: number
  imageUrl: string 
  add: () => void
  decrease: () => void
  quantity: number
}

export function CardProductsInCart({
  add,
  imageUrl,
  price,
  decrease,
  title,
  quantity
}: CardProductsInCartProps) {
  return (
    <CardProductsInCartContainer>

      <img src={imageUrl} alt={title} width={46} height={57} />

      <h3>{title}</h3>

      <QuantityProductButton>
        <p>Qtd:</p>
        <span>
          <button onClick={decrease}>
            <Image src={decreaseIcon} alt="reduzir quantidade" width={10} />
          </button>|
          <button>
            {quantity}
          </button>|
          <button onClick={add}>
            <Image src={addIcon} alt="aumentar quantidade" width={10} />
          </button>
        </span>
      </QuantityProductButton>

      <p>R${price}</p>
    </CardProductsInCartContainer>
  )
}