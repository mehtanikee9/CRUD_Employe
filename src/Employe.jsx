import React, { useState } from 'react'
import axiosInstance from '../src/helpers/axiosInstance'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Employe = () => {
    let navigate = useNavigate() ; 
    let [efname , setEfname] = useState("")
    let [elname , setElname] = useState("")
    let [emailid , setEmailid] = useState("")

    let addemp = (e)=>{
        e.preventDefault()
        let payload = {
            efname ,elname ,emailid 
        }
        axiosInstance.post("/posts" , payload)
        toast.success(`${efname}  ${elname} added successfully!`)
        navigate("/")
        
    }
  return (
    <div className='colo'>
      <form>
        <fieldset style={{textAlign:"center"}}>
            <legend>Enter Employee Details:</legend>
            <label>Employee First Name:</label>
            <input type='text' onChange={(e)=>{
                setEfname(e.target.value)
            }}></input><br></br><br></br>
            <label>Employee Last Name:</label>
            <input type='text' onChange={(e)=>{
                setElname(e.target.value)
            }}></input><br></br><br></br>
            <label>Employee Email ID:</label>
            <input type='text' onChange={(e)=>{
                setEmailid(e.target.value)
            }}></input><br></br><br></br>
            <button onClick={addemp}>Save</button>
          
        </fieldset>
      </form>
    </div>
  )
}

export default Employe
