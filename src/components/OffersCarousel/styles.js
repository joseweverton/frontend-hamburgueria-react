import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 40px 0;
  background-color: #ffffff;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImage = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%;
    color: #424242;
  }
  .description {
    width: 200px;
    height: 50px;
  }

  .price {
    color: #1e81b0;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
`

export const Button = styled.button`
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);

  margin-top: 15px;
  height: 50px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.6;
  }
`
