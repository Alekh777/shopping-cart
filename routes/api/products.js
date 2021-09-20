const { Product } = require('../../db');

const route = require('express').Router();

route.get('/', (req, res)=>{
    // Send array of all the products from DB
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products);
        })
        .catch((err)=>{
            res.status(500).send({error: "Could not retrieve products"})
        })
})

route.post('/', (req, res)=>{
    // We will create a new product from the req containing name, price and manufacturer

    // Validate price if the string inside req.body.price is a number or not
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }

    Product.create({
        name: req.body.name,
        price: parseFloat(req.body.price), // We use parseFloat because, data sent in req.body is sent as string
        manufacturer: req.body.manufacturer
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({error: "Could not add new product"})
    })
})

module.exports = route