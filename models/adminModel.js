const { default: mongoose } = require("mongoose");

const adminSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"admin"
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
})
const adminModel=mongoose.model('admins',adminSchema);
module.exports=adminModel;