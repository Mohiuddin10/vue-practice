Vue.createApp({
    data () {
        return {
            greeting: 'Hello there!',
            isWorking : true,
            title: 'Hello There, I am Sujon',
            age: 33
        };
    },
    methods: {
        changeTitle () {
            this.title = 'This title is changed from methods'
        },
        toggleWorking () {
            this.isWorking = !this.isWorking;
        }

    }

}).mount('#app');
console.log(isWorking);