const User = require('../../db').User
const route = require('express').Router();

route.get('/', (req, res)=>{
    // Send array of all users from our databse
    User.findAll()
        .then((users)=>{
            res.status(200).send(users);
        })
        .catch((err)=>{
            res.status(500).send({
                error: "could not retrieve users"
            })
        })
})

route.post('/', (req, res)=>{
    // We will create a new user from the req containing name
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

module.exports = route