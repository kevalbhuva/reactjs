import { Navigate } from "react-router-dom"

const PrivateRoute = ({data, childern}) => {
    let token = localStorage.getItem("token")
    console.log(data, "==============token")
    if(!token){
        return <Navigate to="/Login" replace/>
    }
    return childern
}

export default PrivateRoute