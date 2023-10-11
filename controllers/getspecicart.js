

const User=require("../models/signup")


exports.getcartofoneuser = async(req,res) => {
        try{

           const{email}= req.query
           
           const exi= await User.find({email}).populate('carts').exec()

           if(!exi)
           {
            return res.status(404).json({
                success:false,
                message:"invalid user"
            })
           }

           

            res.status(201).json({
                success:true,
                message:exi,
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  