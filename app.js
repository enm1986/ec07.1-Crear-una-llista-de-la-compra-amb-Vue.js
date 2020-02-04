var app = new Vue({
    el: "#app",
    data: {
        inName: '', //nombre del producto en el input
        inPrice: 0, //precio del producto en el input
        list: [] //lista de productos
    },
    computed: {
        // calcula el precio total de la lista
        calcTotal: function () {
            let total = 0;
            this.list.forEach(function (element, index) {
                total += element.price * element.quantity;
            });
            return total;
        }
    },
    methods: {
        // añadir un producto a la lista
        addProduct: function () {
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
        deleteLast: function () {
            this.list.pop();
        },
        deleteProduct: function (product) {
            this.list.splice(this.list.indexOf(product), 1);
        }
    }
});