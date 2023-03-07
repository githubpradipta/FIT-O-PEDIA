const express=require('express')
const path=require('path')
const ejs=require('ejs')
const mongoose=require('mongoose')

const userRouter=require('./router/userRouter')
const adminRouter=require('./router/adminRouter')
const authRouter=require('./router/authRouter')
const { urlencoded } = require('express')

//Mongodb Connection
mongoose.connect('mongodb+srv://FIT-O-PEDIA:fitopedia@fit-o-pedia.p3gntum.mongodb.net/?retryWrites=true&w=majority')
.then((db)=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})

//creating a rexpress app
const app=express();

//middelwares
app.use(urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

//Routes
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/',authRouter)

app.get('/',(req,res)=>{
    res.render('landing',{name:'',role:''})
})



app.listen(1000);

