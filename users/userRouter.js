const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get("/", (req, res)=>{
    try{
        userController.getUsers((err, users)=>{
            if(err){
                res.status(500).send({message: "Internal Server Error"})
            }
            res.status(200).send(users)
        })
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router;