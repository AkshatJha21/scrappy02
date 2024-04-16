const express = require("express");

const app = express();
const port = 3000;

app.get('/all', async (req, res) => {

});

app.post('/new', async (req, res) => {

});

app.delete('/remove', async (req, res) => {

});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});