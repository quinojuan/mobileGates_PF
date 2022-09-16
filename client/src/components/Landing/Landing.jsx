import { useHistory } from "react-router-dom";
export default function Landing(){
    history = useHistory();
    history.pushState("/home")
    return(null)
}