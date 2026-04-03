import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { createTaskUrl } from "../../../constants/endpoints"

export const createTask = async (setStatus, data, close) => {
    try{
        console.log(data)
        setStatus(responseStatus.PENDING)
        const response = await axios.post(createTaskUrl, {...data}, {withCredentials: true})
        setStatus(responseStatus.SUCCESS)
        alert(response.data.message)
        console.log(response.data.data)
        close()
    }catch(e){
        console.log(e)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
        setStatus(responseStatus.ERROR)
    }
}