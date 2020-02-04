var app = new Vue({
    el: "#app",
    data: {
        inName: '', //nombre del producto en el input
        inPrice: 0, //precio del producto en el input
        list: [] //lista de productos
    },
    computed: {
        // calcula el precio total de la lista
        calcTotal: function() {
            let total = 0;
            this.list.forEach(function(element, index) {
                total += element.price * element.quantity;
            });
            return total;
        }
    },
    methods: {
        // añadir un producto a la lista
        addProduct: function() {
            if (Number(this.inPrice) > 0 && this.inName.trim()) {
                this.list.push({
                    "name": this.inName,
                    "price": Number(this.inPrice),
                    "quantity": 1,
                    "minus10": Number(this.inPrice) < 10
                });
            }
            this.inName = '';
            this.inPrice = 0;
        },
        // eliminar el último elemento de la lista
        deleteLast: function() {
            this.list.pop();
        },
        // eliminar un producto en particular
        deleteProduct: function(product) {
            this.list.splice(this.list.indexOf(product), 1);
        }
    }
});

Vue.component('list-item', {
    props: ['item'],
    template: '\
        <div class="card" v-bind:class="{minus10: item.minus10}">\
            <span>{{ item.name }}</span>\
            <div>\
                <span>{{ item.price }} € x </span>\
                <input v-model:value="item.quantity" type=number min="1" max="99">\
                <span>uds. = {{ item.price * item.quantity }} €</span>\
            </div>\
            <button v-on:click="deleteProduct(item)">Delete</button>\
        </div>'
});