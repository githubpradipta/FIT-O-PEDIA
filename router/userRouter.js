const express=require('express')
const app=express();

const {userLanding,getAllusers}=require('../controlar/userControler')
const userRouter=express.Router();


userRouter
.route('/:id')
.get(userLanding)

userRouter
.route('/api/all')
.get(getAllusers)

module.exports=userRouter;