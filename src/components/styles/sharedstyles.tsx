import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding-top: 112px;
`
const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  width: 940px;
  align-items: center;
  justify-items: center;
  margin-inline: auto;
  padding-top: 116px;
  padding-bottom: 172px;
  grid-gap: 22px;
`

const Title = styled.h1`
  display: flex;
  text-align: center;
  align-items: baseline;
  line-height: 19px;
  font-size: 40px;
  font-weight: 600;
  text-decoration: none;
  gap: 8px;

  span {
    font-size: 20px;
    position: relative;
    font-weight: 300;
    bottom: 0;
    
  }
`

const NavbarContainer = styled.nav`
  width: 100%;
  padding-block: 28px;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 101px;
  padding-inline: 65px;
  position: fixed;
  top: 0;
`
const CardCart = styled.button`
  padding: 12px;
  font-size: 18px;
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  border: none;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  cursor: pointer;
`

const FooterContainer = styled.footer`
  width: 100%;
  height: 34px;
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #000000;
  line-height: 15px;
`

export { Container, NavbarContainer, Title, CardCart, FooterContainer, ProductsContainer }
