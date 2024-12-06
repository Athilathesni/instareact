import React, { useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Index=({setUser})=>{
    const navigate=useNavigate()
    const getUser=async () => {
        const token=localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }
        else{
            try {
                const res=await axios.get('http://localhost:3000/api/home',{headers: {'Authorization': `Bearer ${token}`}})
                console.log(res);
                
                if (res.status==200) {
                    setUser(res.data.name)
                }
                else{
                    navigate('/login')
                }
            } catch (error) {
                console.log(error)
                location.reload()
                navigate('/login')
            }
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return(
        <>
        <div><h1>Home</h1></div>
        </>
    )
}

export default Index