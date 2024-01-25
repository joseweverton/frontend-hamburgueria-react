import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/logo-image.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignLink,
  ErrorMessage
} from './styles'
export const Login = () => {
  const navigate = useNavigate()
  const { putUserData } = useUser()

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
  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: 'Processando!',
          success: 'Bem-vindo!',
          error: 'Verifique seu Email e/ou Senha'
        }
      )
      putUserData(data)

      setTimeout(() => {
        if (data.admin) {
          navigate('/pedidos')
        } else {
          navigate('/')
        }
      }, 1000)
    } catch (error) {
      //
    }
  }
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
          <div style={{ marginTop: 75 }}>
            <Button type="submit">Entrar</Button>
            <SignLink style={{ marginTop: 25 }}>
              Não possui conta?{' '}
              <Link style={{ color: 'white' }} to="/cadastro">
                Cadastre-se
              </Link>
            </SignLink>
          </div>
        </form>
      </ContainerItens>
    </Container>
  )
}
