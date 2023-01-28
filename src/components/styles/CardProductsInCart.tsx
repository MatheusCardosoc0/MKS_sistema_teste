import Image from "next/image";
import styled from "styled-components";
import addIcon from '../../assets/+.svg';
import decreaseIcon from '../../assets/-.svg';
import Close from '../../assets/x.svg'



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

const ButtonClose = styled.button`
  background-color: ${props => props.theme.colors.black};
  padding: 4px;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  right: 6.5%;
  margin-bottom: 90px;
`

interface CardProductsInCartProps {
  title: string
  price: number
  imageUrl: string
  addToCart: () => void
  decreaseToCart: () => void
  removeProductToCart: () => void
  quantity: number
}

export function CardProductsInCart({
  addToCart,
  imageUrl,
  price,
  decreaseToCart,
  title,
  quantity,
  removeProductToCart

}: CardProductsInCartProps) {
  return (
    <CardProductsInCartContainer>

      <ButtonClose onClick={removeProductToCart}>
        <Image src={Close} alt="Remover produto do carrinho" width={8} />
      </ButtonClose>

      <img src={imageUrl} alt={title} width={46} height={57} />

      <h3>{title}</h3>

      

      <QuantityProductButton>
        <p>Qtd:</p>
        <span>
          <button onClick={decreaseToCart}>
            <Image src={decreaseIcon} alt="reduzir quantidade" width={10} />
          </button>|
          <button>
            {quantity}
          </button>|
          <button onClick={addToCart}>
            <Image src={addIcon} alt="aumentar quantidade" width={10} />
          </button>
        </span>
      </QuantityProductButton>

      <p>R${price}</p>
    </CardProductsInCartContainer>
  )
}