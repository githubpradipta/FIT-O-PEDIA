const mongoose = require("mongoose");
//Mongodb Connection
mongoose.connect('mongodb+srv://FIT-O-PEDIA:fitopedia@fit-o-pedia.p3gntum.mongodb.net/?retryWrites=true&w=majority')
.then((db)=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})

const userSchema=mongoose.Schema({
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
        default:"user"
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
const userModel=mongoose.model('users',userSchema);
module.exports=userModel;