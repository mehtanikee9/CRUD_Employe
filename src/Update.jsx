import React from 'react'
import axiosInstance from "../src/helpers/axiosInstance"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Cart = () => {

  let [products , setProducts] =useState([])

  useEffect(()=>{
      let fetchdata= async ()=>{
      let  {data}= await axiosInstance.get("/posts")
      setProducts(data)
      }
      fetchdata()
  },[])


  let handleDelete = (id)=>{
    console.log(id);
    axiosInstance.delete(`/posts/${id}`)
    toast.error(`product removed`)

    window.location.assign("/")
  }

  return (
    <div className='container'>
          {products.map((x)=>{
      
            return (
              <div className='cards'>
                  {/* <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.pname}`} alt="" /> */}
                  <h3 className='text-focus-in'>Employee First Name : {x.pname}</h3>
                  <h3 className='text-focus-in'>Employe Last Name : {x.pqty}</h3>
                  <h3 className='text-focus-in'>Employe Email id: : {x.pprice}</h3>
                  <div className='btn-block'>
                      <button>
                        <Link id='links' to={`/update/${x.id}`}>Update</Link>
                      </button>
                      <button onClick={()=>{
                          handleDelete(x.id)
                      }}>Delete</button>
                  </div>
              </div>
            )
          })}
    </div>
  )
}

export default Cart