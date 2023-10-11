const User= require('../models/signup')



exports.delete_order = async(req,res) => {
        try{

          const{email,id}=req.body
          

           const de= await User.updateOne({email},{$pull:{orderlist:id}},{new:true}).populate('orderlist').exec()

           const gg= await User.find({email}).populate('orderlist').exec()

           
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
