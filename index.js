const express = require('express');
const authKey = require('./auth');
const authApp = require('./auth');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


const users = [
    {id: 1, name: "ABC", age: 20 },
    {id: 2, name: "BER", age: 18 },
    {id: 3, name: "CIS", age: 23 },
    {id: 4, name: "DOG", age: 19 }
];

app.get('/', (req, res) => {
    res.send("Homepage");
})

app.post('/api/users', (req, res) => {
    const user = {
        id: user.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(user);
    res.send(user);
})

app.listen(2000,() => console.log("connected"));