const userModel=require('../models/userModel')

module.exports.adminLanding=async function adminLanding(req,res){
    id=req.params.id;
    try{
        const user=await userModel.findOne({_id:id});
        res.render('landing',{name:'admin',role:'admin'})
    }
    catch{(err)=>{
        console.log(err);
    }}
    
}