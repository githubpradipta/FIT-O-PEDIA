const userModel=require('../models/userModel')

module.exports.userLanding=async function userLanding(req,res){
    id=req.params.id;
    try{
        const user=await userModel.findOne({_id:id});
        res.render('landing',{name:user.firstname,role:'user'})
    }
    catch{(err)=>{
        console.log(err);
    }}
    
}

module.exports.adminLanding=function adminLanding(req,res){
    res.send('admin after login')
}
module.exports.getAllusers=async function getAllusers(req,res){
    const users=await userModel.find();
    res.send(users)
}
