export default {
  namespaced: true,
  state: {
    step: 1,
    profile: {}
  },
  getters: {
    quizData: state => state
  },
  mutations: {
    SET_PROFILE: (state, payload) => {
      state.profile = payload
    }
  },
  actions: {
    updateProfile: (context, payload) => {
      context.commit('SET_PROFILE', payload)
    }
  }
}
