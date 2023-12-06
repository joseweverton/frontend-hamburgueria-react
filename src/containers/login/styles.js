import styled from 'styled-components'

import Background from '../../assets/background.jpg'
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoginImage = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  padding: 25px 75px;
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Label = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 28px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  padding-left: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '3px solid #ffbb00;' : 'none')};
`
export const SignLink = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #a66f00;
  margin-top: 2px;
`
