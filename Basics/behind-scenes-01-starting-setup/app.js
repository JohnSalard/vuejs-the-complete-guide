const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log('Before Create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('Before Updated');
  },
  updated() {
    console.log('Updated');
  },
  beforeUnmount() {
    console.log('Before Unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);

// const data = {
//   message: 'Hello',
// };

// const handler = {
//   set(target, key, value) {
//     console.log(target);
//     console.log(key);
//     console.log(value);
//     if (key === 'message') {
//       target.longMessage = value + ' World';
//     }
//     target.message = value;
//   },
// };
// const proxy = new Proxy(data, handler);
// proxy.message = 'Hello';
// console.log(proxy);

const app2 = Vue.createApp({
  // template: `<p>Hi</p>`,
  data() {
    return {
      currentUserInput: 'Vue2',
      message: 'Vue is great!2',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.log(this.$refs.userText);
      console.log(this);
    },
  },
});

app2.mount('#app2');
