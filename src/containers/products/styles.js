import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
`
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.$isActiveCategory && '2px solid #9758a6'};
  color: ${props => (props.$isActiveCategory ? '#9758a6' : '#9a9a9d')};
  padding-bottom: 5px;

  font-size: 24px;
  line-height: 20px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 10px;
  padding: 40px;
  margin-top: 20px;
`
