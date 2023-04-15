import { VantResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export const plugins = {
  vueTag: vue(),
  resolvers: [VantResolver()],
  othersPlugins: []
}

export const px2remOptions = {
  rootValue: 37.5
  // propList: ['*'],
}
