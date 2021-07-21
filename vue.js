const app = new Vue({
    el: '#app',
    data: {
        title: 'LISTA DE COSAS POR HACER (Avance de 1-10)',

        cosas: [{
                nombre: 'Logo',
                estado: false
            },
            {
                nombre: 'pag web',
                estado: false
            },
            {
                nombre: 'skillAlexa',
                estado: false
            },
            {
                nombre: 'ActCV',
                estado: false
            },
            {
                nombre: 'ActLink',
                estado: false
            },
            {
                nombre: 'Vue.js',
                estado: false
            }
        ],

        nuevaTarea: ""

    },

    methods: {
        add() {
            this.cosas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            this.nuevaTarea= '';

        },


        edit(index) {
            this.cosas[index].estado = true;
        },

        delet(index) {
            this.cosas.splice(index, 1);
        }

    }



})