const express=require('express')
const app=express();

const {adminLanding}=require('../controlar/adminControler')
const userRouter=express.Router();

userRouter
.route('/:id')
.get(adminLanding)

module.exports=userRouter;