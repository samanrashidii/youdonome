<template>
  <div class="question-box">
    <h4>{{ question.title }}</h4>
    <ul class="answer-box">
        <li
            v-for="(answer, index) in question.answers"
            :key="index"
            @click="optionClicked(index)"
            :class="{'selected': answer.selected}"
        >
            <img
                :src="require(`@/assets/questions/${answer.image}`)"
                :alt="answer.name"
            >
            <strong>{{ answer.name }}</strong>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuestionBox',
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    optionClicked (ind) {
      this.question.answers.forEach((answer, index) => {
        if (index === ind) {
          answer.selected = true
        } else {
          answer.selected = false
        }
      })
      this.$forceUpdate()
      this.$emit('optionSelected', ind)
    }
  }
}
</script>
