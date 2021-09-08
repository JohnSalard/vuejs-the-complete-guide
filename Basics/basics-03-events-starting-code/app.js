const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
      // fullName: '',
    };
  },
  computed: {
    fullName() {
      console.log('computed fullName: ', this.fullName);
      if (this.firstName === '' || this.lastName === '') {
        return '';
      }
      return this.firstName + ' ' + this.lastName;
    },
  },
  watch: {
    // firstName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = `${value} ${this.lastName}`;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = `${this.firstName} ${value}`;
    //   }
    // },
    counter(value) {
      if (value > 50) {
        // const that = this;
        setTimeout( ()=> {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    increaseCounter(number) {
      // console.log('increase');
      this.counter += number;
    },
    decreaseCounter(number) {
      this.counter === 0 ? this.counter : (this.counter -= number);
    },
    resetInput() {
      this.name = '';
      this.confirmName = '';
    },
  },
});

app.mount('#events');
