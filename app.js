// har Vue app faghat mitoone roo yek htmlElement mount she
// too data() , data save mikonim ke be onvan expresion estefade mishe be in shekl {{}}
// va too methods , function haro negah midarim :)
Vue.createApp({
    data() {
        return{
            firstName : "  ",
            lastName : "  "
        }
    },
    methods: {
        returnName() {
            return `${this.firstName}`
        }
    }
}).mount('#app')