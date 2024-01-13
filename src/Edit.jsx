import React, { useEffect, useState } from 'react'
import axiosInstance from '../src/helpers/axiosInstance'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Edit = () => {
    
    let {id} = useParams()
    let navigate = useNavigate() ; 
    let [efname , setEfname] = useState("")
    let [elname , setElname] = useState("")
    let [emailid , setEmailid] = useState("")


    useEffect(()=>{
            let fetchdata = async()=>{
                    let {data} = await axiosInstance.get(`/posts/${id}`)
                    setEfname(data.efname)
                    setElname(data.elname)
                    setEmailid(data.emailid)
            }
            fetchdata()
    },[])
    let updateemp = (e)=>{
        e.preventDefault()
        let payload ={
            efname ,elname ,emailid 
        }
        axiosInstance.put(`/posts/${id}` , payload)
        toast.info(`${efname} updated `)
        navigate("/")

    }

  return (
    <div>
          
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
            <button onClick={updateemp}>Edit</button>
          
        </fieldset>
      </form>
    </div>
  )
}

export default Edit
