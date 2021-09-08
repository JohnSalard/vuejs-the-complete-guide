const app = Vue.createApp({
  data() {
    return {
      input1: '',
      input2: '',
      isVisibleParagraph2: true,
    };
  },
  computed: {
    paragraph1Classes() {
      return { user1: this.input1 === 'user1', user2: this.input1 === 'user2' };
    },
    paragraph2Classes() {
      return this.isVisibleParagraph2 ? 'visible' : 'hidden';
    },
  },
  methods: {
    toggleParagraph() {
      this.isVisibleParagraph2 = !this.isVisibleParagraph2;
    },
  },
});
app.mount('#assignment');
