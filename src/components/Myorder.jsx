import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
const Myorder = () => {

    const ele= useSelector((state)=>state.tok)
    const[order,seto]= useState([''])

    const[load,setl]= useState(false)
    
    useEffect(()=>{
        async function fetchorder()

        {
              const response= await fetch(`http://localhost:8000/api/v2/allorder?email=${ele[0].user.email}`)
              
              const item= await response.json()

              console.log(item)
              seto(item.message[0].orderlist)
              setl(prev=>!prev)
        }

        fetchorder()

    },[])

  return (
    <div>

          {
            load ? <div className='card'>


                 
                
                                <Row xs={1} md={2} className="g-1">

                                        {order.map((fod, index) => (
                                          <Col key={fod._id} >
                                            <Card className="ca" >
                                              <Card.Img variant="top" src={fod.image} className='pop'/>
                                              <Card.Body>
                                                <Card.Title>{fod.title}</Card.Title>

                                              </Card.Body>
                                              <Button>price:{fod.price}</Button>
                                              <br></br>
                                            </Card>
                                          </Col>
                                          ))}
                                </Row> 


                    </div>     : <h1 className='load'>Loading..</h1>
          }
            
    </div>
  )
}

export default Myorder