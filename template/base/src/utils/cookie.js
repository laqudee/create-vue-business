import Cookies from 'js-cookie'

const config = {
  cookieExpires: 15
}

const get = Cookies.get
const set = Cookies.set

export function getToken() {
  return get('token') || ''
}

export function setToken(token, expires) {
  set('token', token, { expires: expires || config.cookieExpires })
}
