import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Container, NavbarContainer, Title, CardCart }
