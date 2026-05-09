const express = require('express');
const app = express();

// Hint: Code to support multipart/form-data goes here

app.use(express.json());

app.use(express.static('public'));

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: "Yello"},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: "Hola"}
];

let nextID = 3;

// Your code goes here.
app.get('/users', (req, res) => {
    res.type('json').send(JSON.stringify(users));
});

app.post('/users', (req, res) => {
    let jo = {
        id: nextID,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    nextID++;
    res.type('json').send(JSON.stringify(jo));
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});