const router = require('express').Router();

// Auth login

router.get('/login', (req, res)=>{
	res.render('login');
})


// Auth logout

router.get('/logout', (req, res) => {
	// Handle with Passport

	res.send('loging out');
})

// Auth with google

router.get('/google', (req, res) => {
	// Hanle with passport
	res.send('login with google')
})

module.exports = router;