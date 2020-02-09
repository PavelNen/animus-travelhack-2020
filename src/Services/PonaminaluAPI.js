import axios from 'axios'

const ponaminaluAPI = axios.create({
  baseURL: 'https://api.ponominalu.ru',
  params: {
    session: 'moscowhack872364',
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
