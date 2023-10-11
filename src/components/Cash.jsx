import React from 'react'
import {  useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const Cash = () => {

  const ele= useSelector((state)=>state.selected)
  const ti = useSelector((state)=>state.time)
  console.log(ti)
  console.log(ele)
  let sum=0;
  for(let k=0;k<ele.length;k++)
  {
         sum+=ele[0].price
  }
  return (

  <div className='recentorderpage'>
    <div>
          <h2>Thank you for ordering food from Foodizz</h2>

          <p>Your order is on the way</p>
        
                <br></br>
                <br></br>
                      
                                    {ele.map((item,index) => (

                                      <>
                                              <div className='orderlist'>


                                                  
                                                  <img src={item.image} alt=" " className='orderfood'/>

                                                  <h4>{item.title}</h4>


                                                  <p>{item.price}</p>

                                                  


                                              
                                              </div>
                                                  <br></br>
                                                  <br></br>
                                       </>

                                     ))}
                        
                     
            

    </div>
     <br></br>
     <hr></hr>

     <div className='division'>
          <p>Pay &#8377;{sum} at the time you receive the order</p>
          <Link to="/order"><Button variant="dark" >My orders</Button>{' '}</Link>
     </div>
     <br></br>
     

    

  </div>   
  )
}

export default Cash