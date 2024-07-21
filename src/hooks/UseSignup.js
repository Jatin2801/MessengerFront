import { useState } from "react"
import toast from "react-hot-toast"

const UseSignup = () => {
    const [loading, setLoading] = useState(false) // ini. its false
    const signup = async ({ fullname, username, password, confirmpass, gender }) => { // these we got from the form of signup
        const success = handleInputErrors({ fullname, username, password, confirmpass, gender })
        if (!success) return; // handleInputErrors returns true we will conti.
        setLoading(true)
        try {
        const res = await fetch('/api/auth/signup',{ // prefix is in vite.config.js
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({ fullname, username, password, confirmpass, gender })
        })
        const data = await res.json()
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    } 
    return {loading , signup}
}

export default UseSignup

function handleInputErrors({ fullname, username, password, confirmpass, gender }) {
    if (!username || !fullname || !password || !confirmpass || !gender) { //We installed react-hot-toast for noti.
        toast.error('Field/s Empty')
        return false
    }
    if (password !== confirmpass) {
        toast.error('Passwords Dont Match')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
    }
    return true
}