const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

// Set View Engine

app.set('view engine', 'ejs');

// Set up routers

app.use('/auth', authRoutes);

// Create home route

app.get('/', (req, res) => {
	res.render('home');
})

// Port 

const port = 3000;

app.listen(port, () => {
	console.log('app now listen for request on port ' + port);
})
