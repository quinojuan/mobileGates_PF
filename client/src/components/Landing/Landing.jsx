<<<<<<< HEAD
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/home')
    },[navigate])
    console.log("Ya paso el navigate")
    return(null)
=======
import { useNavigate  } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    function handleNavigate(){
        return(navigate("/home"))
    }
    handleNavigate()
    return(null)
>>>>>>> 4425bc9b3818008ea89f0052ce4d6a9d78c94866
}