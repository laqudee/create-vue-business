import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export const plugins = {
  vueTag: vue(),
  resolvers: [ElementPlusResolver()],
  othersPlugins: []
}

export const px2remOptions = {
  rootValue: 16,
  unitPrecision: 5,
  mediaQuery: false,
  minPixelValue: 0
}
