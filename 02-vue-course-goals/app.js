const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue',
      vueLink: 'https://vuesjs.org/',
    };
  },
});

app.mount('#user-goal');