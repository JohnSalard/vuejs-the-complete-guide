const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    calculateNumber() {
      console.log('computed', this.number);
      if (this.number > 37) {
        return 'Not there yet';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return 'Too much!';
      }
    },
  },
  watch: {
    calculateNumber() {
      console.log('watch', this.number);
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  methods: {
    increaseNumber(number) {
      this.number += number;
    },
  },
});

app.mount('#assignment');
