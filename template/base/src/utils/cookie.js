import { cookieAndStorage } from 'common-toolbox'

export const getToken = () => {
  return cookieAndStorage.getCookie('token')
}

export const setToken = (token) => {
  return cookieAndStorage.setCookie('token', token)
}
