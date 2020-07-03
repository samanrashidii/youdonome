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
    },
    SET_USERNAME: (state, payload) => {
      state.username = payload
    },
    SET_STEP: (state, payload) => {
      state.step = payload
    }
  },
  actions: {
    updateProfile: (context, payload) => {
      context.commit('SET_PROFILE', payload)
    },
    setUserName: (context, payload) => {
      context.commit('SET_USERNAME', payload)
    },
    setStep: (context, payload) => {
      context.commit('SET_STEP', payload)
    }
  }
}
