<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please enter at least one character</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  components: {
    ErrorAlert,
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError(){
      this.inputIsInvalid = false;
    },  
  }
}
</script>