
const User=require("../models/signup")

exports.order_list = async(req,res) => {
    const currentDate = new Date();
        try{

           const{email,arr}=req.body
           let u= await User.findOneAndUpdate({email},{$push:{orderlist:arr}},{new:true}).populate('orderlist').exec()

           
           


           console.log(u)

            res.status(201).json({
                success:true,
                message:arr,
                data:u,
                orderedAt:[
                    {
                    "orderdate":currentDate.getDate(),
                    "ordermonth":currentDate.toLocaleString('default', { month: 'long' }),
                    "orderyear":currentDate.getFullYear(),
                    "orderhour":currentDate.getMinutes(),
                    "orderminute":currentDate.getMinutes()
                }
                ]
               
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  