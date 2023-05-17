Vue.createApp({
    data () {
        return {
            greeting: 'Hello there!',
            isWorking : false,
            title: 'Hello There, I am Sujon',
            age: 33
        };
    },
    methods: {
        changeTitle () {
            this.title = 'This title is changed from methods'
        }
    }

}).mount('#app');