import axios from "axios"
import { responseStatus } from "../assets/enum/responseStatus"

export const checkToken = async (setStatus, setId) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.get(checkToken)
        setId(response.data)
        setStatus(responseStatus.SUCCESS)
        console.log(response.data)
    }catch(e){
        setStatus(responseStatus.ERROR)
        console.log(e)
    }
}