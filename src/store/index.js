import Vue from 'vue'
import Vuex from 'vuex'
import { FeathersVuex } from '@/feathers-client'
import auth from '@/store/auth'

Vue.use(Vuex)
Vue.use(FeathersVuex)

// Require the entire folder of service plugins with Webpack
const requireModule = require.context( './services', false, /.js$/ )
const servicePlugins = requireModule
  .keys()
  .map(modulePath => requireModule(modulePath).default)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [
    ...servicePlugins, // if you're using require.context, spread the plugins into the array.
    auth
  ]
})
