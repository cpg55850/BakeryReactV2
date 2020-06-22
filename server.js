const express = require('express');
const mongoose = require('mongoose');

const app = express();

const foods = require('./routes/api/foods');

// Body-parser replacement
app.use(express.json());

app.get('/', (req, res) => {
	res.send('hello');
});

// Use routes
app.use('/api/foods', foods);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
