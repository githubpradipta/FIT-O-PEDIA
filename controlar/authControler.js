const userModel=require('../models/userModel')
const adminModel=require('../models/adminModel')

//User Signing up

module.exports.getUserSignup=function getUserSignup(req,res){
    res.render('signup',{role:"User"})
}
module.exports.postUserSignup=async function postUserSignup(req,res){
    const data=req.body;
    const resp=await userModel.create(data)
    res.json(resp);
}

//Admin signing up

module.exports.getAdminSignup=function getAdminSignup(req,res){
    res.render('signup',{role:"Admin"})
}
module.exports.postAdminSignup=async function postAdminSignup(req,res){
    const data=req.body;
    const resp=await adminModel.create(data)
    res.json(resp);
}

//userSign in
module.exports.getuserSignin=function getuserSignin(req,res){
    res.render('signin',{role:"users"})
}
module.exports.postuserSignin=async function postuserSignin(req,res){
    const data=req.body;
    const user=await userModel.findOne({email:data.email})

    if(user){
        if(user.password===data.password){
            res.redirect(`/user/${user._id}`)
        }
        else{
            res.json({
                massage:"Wrong Password"
            })
        }

    }
    else{
        res.json({
            massage:"No user exist"
        })
    }
}
//adminSign in
module.exports.getadminSignin=function postadminSignin(req,res){
    res.render('signin',{role:"admins"})
}
module.exports.postadminSignin=async function postadminSignin(req,res){
    const data=req.body;
    const user=await userModel.findOne({email:data.email})

    if(user){
        if(user.password===data.password){
            res.redirect(`/admin/${user._id}`)
        }
        else{
            res.json({
                massage:"Wrong Password"
            })
        }

    }
    else{
        res.json({
            massage:"No user exist"
        })
    }
}