import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/offers.svg'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryImage,
  ContainerItems,
  Image,
  Button
} from './styles'

function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ]

  return (
    <Container>
      <CategoryImage src={Offers} alt="Logo da oferta" />

      <Carousel
        itemsToShow={3}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto-da-produto" />
              <p className="description">{product.name}</p>
              <p className="price">{product.formatPrice}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
