import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import LoginImg from '../../assets/logo-image.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignLink,
  ErrorMessage
} from './styles'
const Login = () => {
  const schema = Yup.object()
    .shape({
      email: Yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
      password: Yup.string()
        .required('Campo obrigatório')
        .min(6, 'A senha deve conter pelo menos 6 digitos')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => console.log(data)
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Imagem de Login" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <div>
            <Button type="submit">Entrar</Button>
            <SignLink>
              Não possui conta? <a>Cadastre-se</a>
            </SignLink>
          </div>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Login
