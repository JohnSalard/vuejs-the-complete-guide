const app = Vue.createApp({
  data() {
    return {
      taskValue: '',
      tasks: [],
      isActive: true,
    };
  },
  computed: {},
  methods: {
    addTask() {
      if (this.taskValue === '') return;
      this.tasks.push(this.taskValue);
      this.taskValue = '';
    },
    hideButton() {
      this.isActive = !this.isActive;
    },
  },
});
app.mount('#assignment');
