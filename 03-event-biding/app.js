const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastname) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Lastname';
    }
  },
  computed:{
    // fullname() {
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Lastname'; 
    // }
  }
});

app.mount('#events');
