import PropTypes from 'prop-types'
import React from 'react'
// import { useNavigate } from 'react-router-dom'

import { Button } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { putProductInCart } = useCart()
  // const navigate = useNavigate()
  return (
    <Container>
      <Image src={product.url} alt="imagem-do-produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
