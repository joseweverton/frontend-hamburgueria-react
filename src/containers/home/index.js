import React, { useEffect } from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import api from '../../services/api'
import { Container, HomeImg } from './styles'

function Home() {
  useEffect(() => {
    const loadCategories = async () => {
      const response = await api.get('categories')
      console.log(response)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo da Home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
