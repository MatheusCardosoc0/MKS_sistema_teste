import styled from "styled-components";


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
    height: 584px;
    width: 100%;
  }
`


export function CartMenuStyle() {
  return (
    <CartMenuContainer>
      <ContainerItems>
        <h2>Carrinho de compras</h2>

<main></main>
        <span>
          <p>Total:</p>
          <p>R$600</p>
        </span>
      </ContainerItems>
    </CartMenuContainer>
  )
}