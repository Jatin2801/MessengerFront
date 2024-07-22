import toast from "react-hot-toast"

const UserLogin = () => {
    const loginRoute = '/api/auth/login';
    const login = async (username,password) => {
    const success =  handleInputErrors({username,password})
    
    try {
        const res = await fetch(loginRoute,{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({username,password})
        })
        if(res.ok){
            const data = await res.json();

            toast.success('Successfully Logged in')
    
        window.setTimeout(function(){ window.location = "/"; },2500); 
    
        }
         
    } catch (error) {
        console.log(error);
    return toast.error(error.message)
    }
    finally{
        console.log('finallu');
    }
 }

 return {login}
}

export default UserLogin

function handleInputErrors({ fullname, username, password, confirmpass, gender }) {
    if (!username || !password ) { //We installed react-hot-toast for noti.
        toast.error('Field/s Empty')
        return false
    }
    return true
}