const express = require("express");
const cors = require("cors");
const { expense } = require("./db");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/all', async (req, res) => {
    
});

app.post('/new', async (req, res) => {

});

app.delete('/remove', async (req, res) => {

});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});