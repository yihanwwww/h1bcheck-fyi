const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('h1bcheck-test1', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Data = mongoose.model('Data', DataSchema);

app.post('/submit', async (req, res) => {
    const { name, email } = req.body;
    const newData = new Data({ name, email });
    await newData.save();
    res.status(201).send('Data submitted');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
