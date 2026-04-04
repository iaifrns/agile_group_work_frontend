import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { getATaskUrl } from "../../../constants/endpoints"

export const getTaskDetail = async (setStatus, setTask, taskId) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.get(getATaskUrl+taskId, {withCredentials: true})
        setStatus(responseStatus.SUCCESS)
        setTask(response.data.data)
        console.log(response.data.data)
    }catch(e){
        console.log(e)
        setStatus(responseStatus.ERROR)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
    }
}