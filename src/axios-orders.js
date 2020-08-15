import axios from 'axios'

const instanse = axios.create({
  baseURL: 'https://burger-b337f.firebaseio.com/'
})

export default instanse
