import React from 'react'
import axiosInstance from "../src/helpers/axiosInstance"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Emplist = () => {
    let [employe , setEmploye] =useState([])
    useEffect(()=>{
        let fetchdata= async ()=>{
        let  {data}= await axiosInstance.get("/posts")
      
        setEmploye(data)
        }
        fetchdata()
    },[])
    let handleDelete = (id)=>{
        console.log(id);
        axiosInstance.delete(`/posts/${id}`)
        toast.error(`Sucessfully Employee removed`)
    
        window.location.assign("/")
      }
    
  return (
    <div>
      
{employe.map((x)=>{
    return(<div>
{/* <button onClick={addpage}>Add Employe</button> */}
<table border={2} cellSpacing={20} cellPadding={20} >
        <tr>
            <th>Employee First Name:</th>
            <th>Employee Last Name:</th>
            <th>Employee Email Id:</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>{x.efname}</td>
            <td>{x.elname}</td>
            <td>{x.emailid}</td>
            <td> <button className='hi'>
                        <Link id='links' to={`/edit/${x.id}`}>Edit</Link>
                      </button>
                      <button  className='by' onClick={()=>{
                          handleDelete(x.id)
                      }}>Delete</button></td>
                     {/* <td><button className='hi'>
                        <Link id='links' to={`/view/${x.id}`}>View</Link>
                      </button></td>  */}
        </tr>
      </table>
    </div>)
})}
        
    
    </div>
  )
}

export default Emplist
