const express = require('express');
const app = express();
const index = require('./routes/api/index'); // or ('./routes/api')

app.use('/', express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', index.route); // Since index is an object which contains route, ( module.exports = {route}; ). If it was
                              // module.exports = route, then we should have written -> app.use('/api', index), since it is a value not object.
app.listen(4444, ()=>{
    console.log("Server started at http://localhost:4444/");
})