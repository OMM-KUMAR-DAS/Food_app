import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  useSelector,useDispatch } from 'react-redux'
// import { rem } from '../store/cartSlice';
import { ad } from '../store/selectSlice';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Cart = () => {

  const dispatch=useDispatch()
  // const contents= useSelector((state)=>state.cart)
  const ele= useSelector((state)=>state.tok)
  const[content,setco]=useState([''])
  console.log(ele[0].user.email)


  useEffect(()=>{
 
  

      fetch(`http://localhost:8000/api/v2/getuserspecificart?email=${ele[0].user.email}`,{
        method:'GET',

        headers:{
          "Content-Type":"application/json",
        }


      })
      .then(response=>response.json())
      .then(data=>setco(data.message[0].carts))
    
  },[])

 // console.log(contents)
    
  const deletee= async(id)=>{
        
        const response= await fetch(`http://localhost:8000/api/v2/deletecart?email=${ele[0].user.email}&id=${id}`,{

          method:'DELETE',

          headers:{
            "Content-Type":"application/json",
          }

        })

        const resp= await response.json()

        console.log(resp.data[0].carts)
        setco(resp.data[0].carts)

        toast.error(`item deleted`, {
          position: toast.POSITION.TOP_CENTER
        });
        
  }

  const selec= (fod)=>{
      toast.success(`selected`, {
           position: toast.POSITION.TOP_CENTER
         });
       dispatch(ad(fod))
  }



  

  return (
    
                    <div>
                         
                            <Row xs={1} md={3} className="g-1">

                                          {content.map((fod, index) => (
                                            <Col key={fod._id}>
                                              <Card>
                                                <Card.Img variant="top" src={fod.image}/>
                                                <Card.Body>
                                                  <Card.Title>{fod.title}</Card.Title>
                                                  <Card.Text>
                                                    {fod.des}
                                                  </Card.Text>
                                                </Card.Body>
                                                <Button>price:{fod.price}</Button>{''}
                                                <br></br>
                                                <Button onClick={()=>deletee(fod._id)} >Remove</Button>{''}
                                                <br></br>
                                                <Button onClick={()=>selec(fod)} >Select</Button>{''}

                                              </Card>
                                            </Col>
                                            ))}
                             </Row> 
                              
                              <br></br>

                             <Link to="/check"><Button variant="warning" className='
                             bb'>Checkout</Button>{' '}</Link>

                      

       
                    </div>
                  
  )
}

export default Cart