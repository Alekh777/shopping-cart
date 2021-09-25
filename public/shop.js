function fetchProducts(done){
    $.get('/api/products', function (data){
        done(data)
    })
}

function createProductCard(product){
    return $(`
    <div class="col-4 card mx-2 p-3">
    <h4 class="product-name">${product.name}</h4>
    <div class="product-manufacturer">${product.manufacturer}</div>
    <div class="row">
        <div class="col mx-3 px-4">
            <b>Rs. ${product.price}</b>
        </div>
        <button class="btn btn-outline-dark mx-3 px-5">Buy</button>
    </div>
    <br>
</div>
    `)
}