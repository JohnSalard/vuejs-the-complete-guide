const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: '',
    };
  },
  methods: {
    showAlert(msg) {
      alert(msg);
    },
    onKeydown(e) {
      this.output1 = e.target.value;
    },
    onKeyup(e) {
      this.output2 = e.target.value;
    },
  },
});

app.mount('#assignment');
