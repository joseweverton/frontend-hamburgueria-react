import axios from 'axios'

const apiCoderBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiCoderBurger
