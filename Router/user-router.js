const express = require("express")
const user = require("../Model/user_model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:3000', ]
};


//creating user

router.post('/user/create', (req, res) => {
  const newUser = new user(req.body);
  newUser.save();
  res.status(201).json(newUser);
});



//user login

router.post( '/user/login',cors(corsOptions), async(req,res) =>{
  const User = await user.findOne(req.body);
  if(User){
    res.status(201).json(User);
  }else{
    res.status(500).json('user login failed'); 
  }
});



//get all users

router.get('/get/users', async (req, res) => {
  try {
    const allUsers = await user.find(); 
    res.status(201).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


//get user with id

router.get('/user/getById/:id', async (req, res) => {
  try {
    const User = await user.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error: 'User not found' });
  }
});



//user delete with id

router.delete( '/user/deleteById/:id', async (req,res) =>{
  const User = await user.findByIdAndDelete( req.params.id)
  res.status(201).json(User)
})


//user update with id

router.put( '/user/updateById/:id', async (req,res) =>{
  const User = await user.findByIdAndUpdate( req.params.id,{ $set:req.body},{ new:true });
  res.status(201).json(User)
})


module.exports = router;
