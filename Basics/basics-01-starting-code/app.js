const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Beginner Vue!',
      courseGoalB: '<h2 style="color:red">Master Vue!</h2>',
      vueLink: `https://vuejs.org/`,
      // fruits: ['Apple', 'Banana', 'Orange'],
    };
  },
  methods: {
    outputGoal() {
      return Math.random() < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount('#user-goal');
