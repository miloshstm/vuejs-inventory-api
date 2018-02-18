// VueJs inventory using a JSON API
const app = new Vue({
    el: '#app',
    data: {
        products: []
    },
    computed: {
        totalProducts() {
            return this.products.reduce((sum, product) => { 
                return sum + product.quantity;
             }, 0)
        }
    },
    created() {
        fetch('https://api.myjson.com/bins/nf3r3')
        .then(res => res.json())
        .then(json => this.products = json.products)
    }
})

// Displays the JSON API of the above Vue implementation
function printBooks() {
    fetch('https://api.myjson.com/bins/nf3r3')
    .then(res => res.json())
    .then(data => {
        let display = '';
        data.products.forEach(book => {
            display += `
                <ul class="list-group mb-3">
                    <li class="list-group-item list-group-item-action list-group-item-light">
                        <strong>ID:</strong><code>&nbsp;${book.id}</code>
                    </li>
                    <li class="list-group-item list-group-item-action list-group-item-light">
                        <strong>Quantity:</strong><code>&nbsp;${book.quantity}</code>
                    </li>
                    <li class="list-group-item list-group-item-action list-group-item-light">
                        <strong>Name:</strong><code>&nbsp;${book.name}</code>
                    </li>
                </ul>
            `;
        });
        document.getElementById('display').innerHTML = display;
    })
}
document.getElementById('printBooks').addEventListener('click', printBooks);