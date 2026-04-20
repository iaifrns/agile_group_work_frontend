import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { getATaskUrl } from "../../../constants/endpoints"

export const getAllTasks = async (setStatus, setTasks) => {
    try{
        setStatus(responseStatus.PENDING)
        console.log("this is the dashboard")
        const response = await axios.get(getATaskUrl + 'get_all_task', {withCredentials: true})
        setTasks(response.data.data)
        setStatus(responseStatus.SUCCESS)
    }catch(e){
        console.log(e)
        setStatus(responseStatus.ERROR)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
    }
}