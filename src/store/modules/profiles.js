import SERVER from '@/service/server'

export default {
  namespaced: true,
  state: {
    profileBoxes: null
  },
  getters: {
    profileBoxes: state => state.profileBoxes
  },
  mutations: {
    SET_PROFILEBOXES: (state, val) => {
      state.profileBoxes = val
    }
  },
  actions: {
    getProfiles: (context, payload) => SERVER.getProfiles().then((res) => {
      console.log(res)
      context.commit('SET_PROFILEBOXES', res.data)
    })
  }
}
