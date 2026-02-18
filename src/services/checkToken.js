import axios from "axios"
import { responseStatus } from "../assets/enum/responseStatus"
import { checkTokenApi } from "../constants/endpoints"

export const checkToken = async (setStatus, setId) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.get(checkTokenApi)
        console.log(response.data)
        if(response.data.id.id){
            setId(response.data.id.id)
        }
        setStatus(responseStatus.SUCCESS)
    }catch(e){
        setStatus(responseStatus.ERROR)
        console.log(e)
    }
}