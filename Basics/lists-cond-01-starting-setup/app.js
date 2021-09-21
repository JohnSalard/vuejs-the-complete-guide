const app = Vue.createApp({
  data() {
    return {
      goalValue: '',
      goals: [],
      profiles: [
        { name: 'Messi', age: 33 },
        { name: 'Ronaldo', age: 36 },
      ],
      // profiles: { name: 'Messi', age: 33 },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
      this.goalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1); 
    },
  },
});
app.mount('#user-goals');
