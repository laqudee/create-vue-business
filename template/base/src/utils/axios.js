import { createAxios } from 'common-toolbox/src/index.js'
import { getToken } from './cookie.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const axios = createAxios({
  baseURL: '',
  timeout: 50000,
  getToken,
  router
})

export default axios
