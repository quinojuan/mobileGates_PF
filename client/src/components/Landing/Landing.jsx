import { useNavigate  } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    function handleNavigate(){
        return(navigate("/home"))
    }
    handleNavigate()
    return(null)
}