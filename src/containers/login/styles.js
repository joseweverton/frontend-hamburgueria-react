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
    margin-top: 100px;
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
  border: none;
`
export const Button = styled.button`
  width: 182.81px;
  height: 36.129px;
  margin-top: 75px;
  margin-bottom: 25px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: #eee;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
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
