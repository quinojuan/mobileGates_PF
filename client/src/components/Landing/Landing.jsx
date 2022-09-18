import { useNavigate } from "react-router-dom";
export default function Landing(){
    const navigate = useNavigate();
    navigate.push("/home")
    return(null)
}