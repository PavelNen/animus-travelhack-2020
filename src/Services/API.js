import axios from 'axios'

const API = axios.create({})

// API.defaults.withCredentials = true;
API.defaults.headers.common = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

export { API }
