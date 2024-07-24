import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversations = () => {
 const [ conversations , Setconversations] = useState([])
    const  getconversations = async () =>{
        try {
            const userdata = JSON.parse(localStorage.getItem("chat-user"))
            const uderId = userdata._id
           
            const res = await fetch('/api/users', {
                method: "GET",
                headers: {
                    'user-id': uderId,
                }
            }) // it is a get method 
            const data = await res.json()
            if(data.error){
                throw new Error(error.data)
            }

            Setconversations(data)
        } catch (error) {
            toast.error(error.message)
        }
    }
 return {conversations , getconversations}
}

export default useGetConversations ; 