import Vue from 'vue'
import Vuex from 'vuex'
import profiles from './modules/profiles'
import quiz from './modules/quiz'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    profiles,
    quiz
  }
})
