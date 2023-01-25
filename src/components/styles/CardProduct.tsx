import styled from 'styled-components'
import IconButton from '../../assets/Path.svg'
import Image from 'next/image'
import React from 'react'

const CardProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 217.56px;
  height: 285px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  overflow: hidden;
  padding-top: 12px;
`

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 8px;
  color: #2C2C2C;
  
  div{
    display: flex;
    gap: 16px;
    align-items: center;

    h2{
      font-size: 16px;
      line-height: 19px;
    }
    span{
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      padding: 4px;
      background-color: #373737;
      border-radius: 5px;
    }
  }

  p{
    font-size: 10px;
    line-height: 12px;
    width: 152px;
  }
`

const ButtonProduct = styled.button`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  border: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
`

interface CardProductProps {
  urlImage: string | any
  price: number
  title: string
  description: string
}

export default function CardProduct({
  description,
  price,
  title,
  urlImage
}: CardProductProps) {
  return (
    <CardProductContainer>
      <Image src={urlImage} alt="title" />

      <ProductInformation>
        <div>
          <h2>{title}</h2>
          <span>R${price}</span>
        </div>
        <p>{description}</p>
      </ProductInformation>

      <ButtonProduct>
        <Image src={IconButton} alt={"Adicionar ao carrinho"} />
      </ButtonProduct>
    </CardProductContainer>
  )
}
