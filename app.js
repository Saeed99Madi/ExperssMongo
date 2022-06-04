//app.js
const express = require('express');
const app = express();


//Middlewares 


//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//Serve
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on PORT", PORT);
});