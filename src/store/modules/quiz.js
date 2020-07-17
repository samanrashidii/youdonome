import SERVER from '@/service/server'

export default {
  namespaced: true,
  state: {
    step: 1,
    profile: {},
    username: null,
    questionStep: 1,
    totalQuestion: 4,
    correctAnswers: 0,
    questions: []
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
    SET_QUESTION_STEP: (state) => {
      if (state.questionStep === state.totalQuestion) {
        // Questions are all answered go next step
        state.step++
      } else {
        // GO next question
        state.questionStep++
      }
    },
    UPDATE_CORRECT_ANSWER: (state) => {
      state.correctAnswers++
    },
    SET_QUESTIONS: (state, val) => {
      state.questions = val
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
    setQuestionStep: (context) => {
      context.commit('SET_QUESTION_STEP')
    },
    updateCorrectAnswer: (context) => {
      context.commit('UPDATE_CORRECT_ANSWER')
    },
    getQuestions: (context) => SERVER.getQuestions().then((res) => {
      context.commit('SET_QUESTIONS', res.data)
      return res.data
    })
  }
}
