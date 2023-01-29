import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import X from '../../assets/x.svg'


const CartMenuContainer = styled.section`
  width: 486px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  color: #FFFFFF;

  

  span{
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 0;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`

const ContainerItems = styled.div`

  padding: 40px;
    
  h2{
    width: 140px;
    height: 56px;
    font-size: 27px;
    line-height: 33px;
    font-weight: bold;
    }

  main{
    padding-block: 70px;
    height: 502px;
    margin-block: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
      width: 0px;
    }
  }
`

const ButtonCartMenu = styled.button`
  width: 100%;
  height: 97px;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: #FFFFFF;
  border: none;
  background-color: ${props => props.theme.colors.black};
  position: absolute;
  bottom: 0%;

`

const CloseButton = styled.button`
  background-color: ${props => props.theme.colors.black};
  position: absolute;
  right: 4%;
  top: 4%;
  border-radius: 100%;
  border: none;
  padding: 8px;
`
interface CartMenuStyleProps{
  children: ReactNode
  totalPrice: number
  close: () => void
}

export function CartMenuStyle({
  children,
  close,
  totalPrice
}: CartMenuStyleProps) {
  return (
    <CartMenuContainer>
      <ContainerItems>
        <h2>Carrinho de compras</h2>
        <CloseButton onClick={close}>
          <Image src={X} alt="fechar menu" />
        </CloseButton>
        <main>
          {children}
        </main>
        <span>
          <p>Total:</p>
          <p>R${totalPrice}</p>
        </span>


      </ContainerItems>
      <ButtonCartMenu>Finalizar compra</ButtonCartMenu>
    </CartMenuContainer>
  )
}