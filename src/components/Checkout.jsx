import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {  useSelector } from 'react-redux'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const phoneNumberRegex = /^\d{10}$/;
const pincodeRegex = /^\d{6}$/;

const Checkout = () => {
    
    const[details,setd]= useState({Phone:"",city:"",address:"",pin:""})
    const content= useSelector((state)=>state.selected)
    const ele= useSelector((state)=>state.tok)
    const navigate=useNavigate()
    let sum=0
    for(let i=0;i<content.length;i++)
    {
        sum+=content[i].price
    }

    function handleuser(event)
    {
        setd((prev)=>(
            {
               ...prev,[event.target.name]:event.target.value
            }))
    }

    function check(event)
    {
        event.preventDefault()

        const isValidphoneNumber= phoneNumberRegex.test(details.Phone)
        const isValidpincode= pincodeRegex.test(details.pin)

        if(isValidphoneNumber && isValidpincode)
        {

            return navigate('/Paymethods')

        }

        else if(!isValidphoneNumber)
        {

            return toast.error(`mobile number is sort`, {
                position: toast.POSITION.TOP_CENTER
              });
        }

        else{
            return toast.error(`pincode must be of 6 digits`, {
                position: toast.POSITION.TOP_CENTER
              });
        }




    }

  return (
    <div className='jk'>
        <h2>Checkout</h2>
        <form className='jkl' onSubmit={check}>
                <label>

                        <p>Name<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    value={ele[0].user.name}
                                    required
                                    placeholder="Name"
                        />

                </label>

                <label>

                        <p>Email<sup>*</sup></p>



                        <Form.Control

                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    value={ele[0].user.email}
                                    required
                                    placeholder="email address"
                        />

                </label>

                <label>

                        <p>Phone<sup>*</sup></p>



                        <Form.Control
                                    type="number"
                                    id="inputPassword5"
                                    size="md"
                                    name="Phone"
                                    value={ele.phone}
                                    onChange={handleuser}
                                    required
                                    placeholder="phone number"
                        />

                </label>

                <label>

                        <p>City<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    name="city"
                                    value={details.city}
                                    onChange={handleuser}
                                    required
                                    placeholder="city"
                        />

                </label>


                <label>

                        <p>Pincode<sup>*</sup></p>



                        <Form.Control
                                    type="number"
                                    id="inputPassword5"
                                    size="md"
                                    name="pin"
                                    value={details.pin}
                                    onChange={handleuser}
                                    required
                                    placeholder="pincode"
                        />

                </label>

                <label>

                        <p>Address<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="lg"
                                    name="address"
                                    value={details.address}
                                    onChange={handleuser}
                                    required
                                    placeholder="add address"
                        />

                </label>
               <button className='nb'><strong>Checkout{sum}</strong></button>
        </form>

    </div>
  ) 
}

export default Checkout