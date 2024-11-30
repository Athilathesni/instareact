import userSchema from './model/user.js'
import bcrypt from 'bcrypt'
import nodemailer from "nodemailer"
import pkg from 'jsonwebtoken'
const {sign} =pkg

const transporter = nodemailer.createTransport({
    service:"gmail",
    // host: "sandbox.smtp.mailtrap.io",
    // port:2525 ,
    // secure: false,
    auth: {
    //   user: "usmnchusman606@gmail.com",
    //   pass: "kobm upne reiz mryv",
    user:"usmanchusman606@gmail.com",
    pass:"kobm upne reiz mryv"
    },
  });


  export async function adduser(req,res) {
    const {profile,name,email,phone,pass,cpass}=req.body
    if(!(name&&email&&pass&&cpass))
        return res.status(500).send({msg:"empty input"})
    else if(pass!=cpass)
        return res.status(500).send({msg:"password missmatch"})

    bcrypt.hash(pass,10).then((hpwd)=>{
        // console.log(hpwd)
        console.log("data added");
        userSchema.create({profile,name,email,phone,pass:hpwd}).then(()=>{
            res.status(201).send({msg:"Successfull"})
        }).catch((error)=>{
            res.status(404).send({error:error})
        })  
    }).catch((error)=>{
        console.log(error)
    }) 
}


export async function login(req,res) {
    const {email,pass}=req.body
    if(!(email&&pass))
        return res.status(500).send({msg:"empty input"})

    const user= await userSchema.findOne({email})
    if(!user)
        return res.status(500).send({msg:"not exist"})

    const success=await bcrypt.compare(pass,user.pass)

    if(success!=true)
        return res.status(500).send({msg:"Incorrect Password"})

    const token=await sign({UserID:user._id},process.env.jwt_key,{expiresIn:"24h"})
    res.status(200).send({token})
}

export async function getUser(req, res) {
    const usr=await userSchema.findOne({_id:req.user.UserID})
    const data=await postSchema.find()
    res.status(200).send({usr,data}); 
}

export async function getUserDetails(req,res) {
    const usr=await userSchema.findOne({_id:req.user.UserID})
    const post=await postSchema.find({id:req.user.UserID})
    res.status(200).send({usr,post}); 
}


    export async function emailvalidation(req,res) {
        const {email}=req.body
        const check = await userSchema.findOne({email})
    const info = await transporter.sendMail({
    from:"usmnchusman606@gmail.com" , 
    to: email, 
    subject: "OTP",
    text: "verify", 
    html: `<b>otp is${`
        <div style="height: 200px; width: 200px; margin-left: 500px; margin-top: 250px;" >
        <div style="width: 400px; height: 150px; border:none; background-color: rgb(248, 247, 247); border-radius: 3px; box-shadow:0 0 2px 2px rgb(199, 197, 197); ">
            <h3 style="color: rgb(146, 57, 16); font-weight: bold; font-size: 25px; margin-top: 10px; margin-left: 110px;">Email Validation</h3>
            <input type="text" name="email" id="email" placeholder="enter email" style="width: 250px; height: 30px; margin-top: 40px; margin-left: 20px;">
            <button style="height:30px; width: 90px; color: white; background-color: seagreen; border: none; border-radius: 4px; font-weight: bold;">Verify</button>
        </div>
    </div>`
}</b>`, 
});
      
    //   res.status(200).send({msg:"OTP sent"})
    res.status(200).send({msg:"this email not exist"})
 
}

// export async function checkotp(req,res) {
//     const {otp,email}=req.body
//     const check = await userSchema.findOne({email})
//     if(check){
//         if(otp==otp){
//             res.status(200).send({msg:"OTP is correct"})
//         }
//         else{
//             res.status(404).send({msg:"OTP is incorrect"})
//         }
//     }
//     else{
//         res.status(404).send({msg:"This Email has not created user"})
//     }
// }


export async function updatePass(req,res){
    const {pass,cpass,email}=req.body
    if(pass!=cpass)
        return res.status(500).send({msg:"password missmatch"})
    
    bcrypt.hash(pass,10).then((hpwd)=>{
        userSchema.updateOne({ email }, { $set: { pass: hpwd, otp: 0 } }).then(()=>{ 
            res.status(201).send({msg:"Password changed successfully"})
        }).catch((error)=>{
            res.status(404).send({error:error})
        })  
    }).catch((error)=>{
        console.log(error)
    }) 
}