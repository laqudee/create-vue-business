import { createAxios } from 'common-toolbox/src/index.js'
import { getAccessToken } from './cookie.js'
import router from '../router'

const axios = createAxios({
  baseURL: '',
  timeout: 50000,
  getAccessToken,
  router
})

export default axios
