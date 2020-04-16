const { User } = require('../models/index')
const bcrypt = require('bcryptjs');
const UserController={
    
   async register(req,res){
       try {
        const hash = await bcrypt.hash(req.body.password,10)
        const user = await User.create({
            ...req.body,
            password:hash
        })
         res.send(user); 
       } catch (error) {
        console.log(error)
        res.status(500).send 
       }
    },
    login(req,res){
        User.findOne({
            where:{
                username:req.body.username
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
          bcrypt.compare(req.body.password,user.password).then(isMatch=>{
            if(!isMatch){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            } 
            res.send(user)
          });
        })
    },
}
module.exports=UserController;