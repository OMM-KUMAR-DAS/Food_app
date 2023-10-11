
const User=require("../models/signup")

exports.deletecarts = async(req,res) => {
        try{

          const{email,id}=req.query
          
          
          // const user= await User.find({email})

          // if(!user)
          // {
          //   return res.status(404).json({success:false,message:'user not found'})
          // }

          // const commentIndex= user.carts.indexOf(id)
          // console.log(commentIndex)
          // if(commentIndex===-1)
          // {
          //   return res.status(404).json({success:true,message:"food not found"})
          // }

          // user.carts.splice(commentIndex,1)

          // await user.save()


           const de= await User.updateOne({email},{$pull:{carts:id}},{new:true}).populate('carts').exec()

           const gg= await User.find({email}).populate('carts').exec()

           
            res.status(201).json({
                success:true,
                message:de,
                data:gg
                
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  