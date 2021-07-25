const app = new Vue({
    el: "#app",
    data: {
        title: "Propiedades computadas",
        mensaje: "",
        contador: 0
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse('').join('');
        },
        color() {
            return {
                'bg-success': this.contador > 20,
                'bg-danger': this.contador >20 && this.contador <69,
                'bg-dark': this.contador >= 69
            }
        }

    }
})