import React from 'react'

import Category from '../../assets/category.svg'
import { Container, CategoryImage } from './styles'
function CategoryCarousel() {
  return (
    <Container>
      <CategoryImage src={Category} alt="Logo da Home" />
    </Container>
  )
}

export default CategoryCarousel
