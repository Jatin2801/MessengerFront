import React, { useState } from 'react'
import toast from 'react-hot-toast'

const UseLogout = () => {
    //const[loading] = useState(false)
 const logout = async () =>{
    try {
        const res = await fetch('/api/auth/logout',{
            method: "POST",
            headers:{"Content-Type" : "application/json"}
        })
        const data = await res.json()
        if(data.error){
            return new Error(data.error)
        }
        toast.success('Logged Out Successfully')
        window.setTimeout(function(){ window.location = "/login"; },2500); 
        return 
      
    } catch (error) {
        toast.error(error.message)
    }finally{
        
    }
 }
 return {logout}
}

export default UseLogout