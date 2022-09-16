import { useHistory } from "react-router-dom";
export default function Landing(){
    History = useHistory();
    History.push("/home")
    return(null)
}