const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: '1',
          name: 'Steve Roger',
          phone: '0837281689',
          email: 'CaptainAmerica@hotmail.com',
        },
        {
          id: '2',
          name: 'Tony Stark',
          phone: '0995051168',
          email: 'Ironman@hotmail.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailAreVisible?'Hide':'Show Details'}}</button>
    <ul v-if="detailAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: '2',
        name: 'Tony Stark',
        phone: '0995051168',
        email: 'Ironman@hotmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount('#app');
