import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { deleteRequestUrl } from "../../../constants/endpoints"

export const deleteRequest = async (setStatus, setRequestList, requestList, requestId, setShowConfirmPopup) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.delete(deleteRequestUrl, {data:{requestId},withCredentials:true})
        const newReqList = requestList.filter(item => item.id != requestId)
        setRequestList(newReqList)
        setStatus(responseStatus.SUCCESS)
        setShowConfirmPopup(false)
        alert(response.data.message)
    }catch(e){
        console.log(e)
        setStatus(responseStatus.ERROR)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
    }
}