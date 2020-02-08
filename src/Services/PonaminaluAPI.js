import axios from 'axios'

const ponaminaluAPI = axios.create({
  baseURL: 'https://api-dev.ponominalu.ru',
  params: {
    session: 123,
  },
  headers: {
    // Authorization: 'Token moscowhack872364'
  }
})

// ponaminaluAPI.defaults.withCredentials = true;
ponaminaluAPI.defaults.headers.common = {}

ponaminaluAPI.defaults.params = {
  session: 123,
}

export { ponaminaluAPI }
