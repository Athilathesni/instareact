import axios from "axios"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Index=()=>{
    const navigates=useNavigate()
    const getUser=async()=>{
        const token=localStorage.getItem("token")
        console.log(!token);

        if(!token){
            // console.log(hai);
            navigates("/login")
        }
        else{
            try{
              const res=await axios.get("https://localhost:4000/api/home",{})
              if(res.status==200){
                setUser(res.data.name)
              } 
              else{
                navigates("/login")
              } 
            }catch(error){
                console.log(error);
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