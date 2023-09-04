Vue.component("product-details", {

    data() {
        return {
            product: { 'name': 'product1', 'price': 200, 'available': true }
        }
    },

    computed: {
        formattedPrice() {
            return `$${this.product.price.toFixed(2)}`
        },
        isAvailable() {
            if (this.product.available) {
                return 'Available'
            } else {
                return 'Out of stock'
            }
        }
    },
    template: `        
            <div>
            {{product.name}} - {{formattedPrice}} - {{isAvailable}}
            </div>          
    `,
});

const app = new Vue({
    el: '#app',
    data: {
    },
})


