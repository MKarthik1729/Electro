const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User');

// You can require and use your routes here ;)

router.get('/', (req, res) => {
  res.send("jhdcoelnl")
})

router.post('/signup', (req, res) => {
  console.log(req.body)
  const newUser = new User(req.body);

  // Save the user to the database
  newUser.save()
    .then(savedUser => {
      console.log('User saved:', savedUser);
      // Handle success, send response, etc.
      res.send("successful")
    })
    .catch(error => {
      console.error('Error saving user:', error);
      // Handle error, send error response, etc.
    });

})
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {

      res.json({ success: true, message: 'Login successful',id:user._id });
    } else {

      res.json({ success: false, message: 'Incorrect email or password' });
    }
  } catch (error) {
    console.error('Error checking login credentials:', error);
    res.status(500).send('Error checking login credentials.');
  }
});



module.exports = router;