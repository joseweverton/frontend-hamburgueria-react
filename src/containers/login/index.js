import React from 'react'

import LoginImg from '../../assets/logo-image.svg'
import Logo from '../../assets/logo.svg'
// import { useForm } from 'react-hook-form'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignLink
} from './styles'
const Login = () => {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem de Login" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>
        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <div>
          <Button>Entrar</Button>
          <SignLink>
            Não possui conta ? <a>Cadastre-se</a>
          </SignLink>
        </div>
      </ContainerItens>
    </Container>
  )
}

export default Login
