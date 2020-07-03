export default {
  namespaced: true,
  state: {
    step: 2,
    profile: {},
    username: null,
    questionStep: 0
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
    },
    SET_QUESTION_STEP: (state, payload) => {
      state.questionStep = payload
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
    },
    setQuestionStep: (context, payload) => {
      context.commit('SET_QUESTION_STEP', payload)
    }
  }
}
