const express = require('express');
const router = express.Router();

const authController = require('./authController');

router.post('/register', (req, res)=>{
    try{
        const {name, email, password} = req.body
        if(!(name && email && password)){
            res.status(400).send({message: "All input is required"})
        }
        const userDetails = {name, email, password}
        authController.registerUser(userDetails, (err, result)=>{
            if(err){
                res.status(400).send({message: "User already exists"})
            }
            res.status(201).send(result)
        })

    }catch(err){
        res.status(500).send({message: err})
    }
})