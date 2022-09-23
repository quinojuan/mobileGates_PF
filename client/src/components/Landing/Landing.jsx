import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/home')
    },[navigate])
    console.log("Ya paso el navigate")
    return(null)
}