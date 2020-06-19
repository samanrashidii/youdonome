import Vue from 'vue'
import Vuex from 'vuex'
import profiles from './modules/profiles'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    profiles
  }
})
