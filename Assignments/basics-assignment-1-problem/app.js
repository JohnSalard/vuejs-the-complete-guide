const app = Vue.createApp({
  data() {
    return {
      name: 'Lionel Messi',
      age: 33,
      image:
        'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210810164931-01-lionel-messi-joins-psg-barcelona-spt-intl.jpg',
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.floor(Math.random() * 1) + 1;
    },
  },
});

app.mount('#assignment');
