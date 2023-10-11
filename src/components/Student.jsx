
import { useEffect,useState } from 'react'; 
import { useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Downsection from './Downsection';
import { FaShoppingCart } from 'react-icons/fa';





const Student = () => {

    
    const[fod,setf]=useState([''])
    const[car,setc]=useState('')
    
    const[bol,setb]= useState(true)
    const[load,setl]= useState(false)
    
    const ele= useSelector((state)=>state.tok)
    
    

   useEffect(()=>{
       async function getfoods()
       {
        const response= await fetch('http://localhost:8000/api/v2/getal',{
            method:'GET',
            headers:{
              "Content-Type":"application/json",
            },

            
        })

         const dat= await response.json();
        setf(dat.message)
        setl(prev=>!prev)
      }

      async function getcart()
       {
        const response= await fetch(`http://localhost:8000/api/v2/getuserspecificart?email=${ele[0].user.email}`,{
            method:'GET',
            headers:{
              
              "Content-Type":"application/json",

            },
        })

        const dat= await response.json();
        setc(dat.message[0].carts)
       
        

      }
      
      getfoods()
      getcart()
      
    },[])
    
    
 
    const adding=(fod)=>{

      
      for(let i=0;i<car.length;i++)
      {
        if(fod._id===car[i]._id)
        {
          return  toast.success(`item already added`, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }

      
      toast.success(`item added`, {
        position: toast.POSITION.TOP_CENTER
      });

      fetch("http://localhost:8000/api/v2/getcar",{
        method:'POST',
        headers:{
          
          "Content-Type":"application/json",

        },

        body:JSON.stringify({
         
          email:ele[0].user.email,
          id:fod._id
          
       })

      })

      .then(response=>response.json())
      .then(data=>{setc([...car,data.message.carts])})

      
    }
  
    const food= async(event)=>{
        if(bol===true)
        {
          setb(prev=>!prev)
          // console.log(bol)
        }
      try{
           
        const response= await fetch(`http://localhost:8000/api/v2/getby?category=${event.target.value}`,{
         method:'GET',
          headers:{
            "Content-Type":"application/json",
         },
      })

      const dat= await response.json();
      setf(dat.message)
   
          

      }catch(err)
      {
        console.log(err)
      }
 }


 const foods= async(event)=>{
   if(bol===false)
   {
     setb(prev=>!prev)
      
   }
  try{
    const response= await fetch(`http://localhost:8000/api/v2/getal`,{
     method:'GET',
      headers:{
        "Content-Type":"application/json",
     },
  })

  const dat= await response.json();
  setf(dat.message)

      

  }catch(err)
  {
    console.log(err)
  }
}

const foo= async(event)=>{
  try{
       
    const response= await fetch(`http://localhost:8000/api/v2/getchoice?choice=${event.target.value}`,{
     method:'GET',
      headers:{
        "Content-Type":"application/json",
     },
  })

  const dat= await response.json();
  setf(dat.message)
  

      

  }catch(err)
  {
    console.log(err)
  }
}

  return (
    <div>
               <Navbar expand="sm" className="bg-body-tertiary omm  ">
                  <Container className='hnm'>
                    <Navbar.Brand href="#home">Foodizz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#link">Home</Nav.Link>
                        <Link to='/cart' className='lin'> <FaShoppingCart size={20} color="blue" /><sup>{car.length}</sup></Link>
                        <span></span>
                        <Link to="/order"><Button variant="light" >Myorder</Button>{' '}</Link>
                      </Nav>
                    </Navbar.Collapse>
                    
                  </Container>
               </Navbar>
               
               
               <br></br>

               <h3 className='h3'><i>Our Menu</i></h3>
               <br></br>

               <div className='jj'>
                    <Button variant="primary" onClick={foods} className='btt'>All</Button>{' '}
                    <Button varient="Secondary" onClick={food} value="chicken" className='btt'>Chicken</Button>{''}
                    <Button varient="Success" onClick={food} value="panner" className='btt'>Panner</Button>{''}
                    <Button varient="Warning" onClick={food} value="pizza" className='btt'>pizza</Button>{''}
               </div> 

                 

              <br></br>
              <br></br>

              {
                 
                     bol && <div className='j'>
                                <Button onClick={foo} value="veg" className='b_'>Veg</Button>{''}
                                <Button onClick={foo} value="nonveg" className='b_'>Nonveg</Button>{''}
                           </div>
              }

              <br></br>

              
                        {load ? 
                            <div className='card'>


                              
                              
                                  <Row xs={1} md={3} className="g-1">

                                            {fod.map((fod, index) => (
                                              <Col key={fod._id} >
                                                <Card className="ca" >
                                                  <Card.Img variant="top" src={fod.image} className='pop'/>
                                                  <Card.Body>
                                                    <Card.Title>{fod.title}</Card.Title>
                                                    <Card.Text>
                                                      {fod.des}
                                                    </Card.Text>
                                                  </Card.Body>
                                                  <Button>price:{fod.price}</Button>
                                                  <br></br>
                                                  <Button onClick={()=>adding(fod)}>Add food</Button>

                                                </Card>
                                              </Col>
                                              ))}
                                    </Row> 
                                  
                                
                            </div>: <div className='loadingdata'><h3>Fetching delicious food from our store......</h3>
                                         <img src="https://media.tenor.com/DyxsgIPMljoAAAAd/burger-hungry.gif" alt=""></img></div>

                       }     
                  
                  <br></br>
                  <br></br>

               <div>
                     <Downsection/>
               </div>

              
    </div>
  )
}

export default Student