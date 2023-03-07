const express=require('express')
const app=express();

const {getUserSignup, postUserSignup,getAdminSignup,postAdminSignup,getadminSignin,postadminSignin,getuserSignin,postuserSignin}=require('../controlar/authControler')
const authRouter=express.Router();

authRouter
.route('/users/signup')
.get(getUserSignup)
.post(postUserSignup)

authRouter
.route('/admins/signup')
.get(getAdminSignup)
.post(postAdminSignup)

authRouter
.route('/users/signin')
.get(getuserSignin)
.post(postuserSignin)

authRouter
.route('/admins/signin')
.get(getadminSignin)
.post(postadminSignin)

module.exports=authRouter;
