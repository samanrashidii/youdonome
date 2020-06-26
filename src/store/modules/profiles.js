import SERVER from '@/service/server'

export default {
  namespaced: true,
  state: {
    profiles: []
  },
  getters: {
    profiles: state => state.profiles
  },
  mutations: {
    SET_PROFILES: (state, val) => {
      state.profiles = val
    }
  },
  actions: {
    getProfiles: (context) => SERVER.getProfiles().then((res) => {
      context.commit('SET_PROFILES', res.data)
      return res.data
    })
  }
}
