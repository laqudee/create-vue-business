import { createAxios } from 'common-toolbox'
import { getToken } from './cookie.js'
import router from '../router/index.js'

/**
 * router的引入路径可自由配置
 */

/**
 * @description 自定义一个消息提示弹框
 * @param {Object} messageObject
 * messageObject : {
 *  type: 'success', 'error', 'info', 'warning'
 *  message: '提示信息'
 * }
 */
const messageTip = (messageObject) => {
  alert(messageObject.message)
  console.log('type:', messageObject.type)
}

const axios = createAxios({
  baseURL: '',
  timeout: 50000,
  tokenName: 'token',
  getToken,
  router,
  messageTip
})

export default axios
