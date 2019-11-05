import axios from 'axios'

const API = (url,method='get') => axios[method](url)

export default API