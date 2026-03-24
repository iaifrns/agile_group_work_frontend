import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { getAllGroupsUrl } from "../../../constants/endpoints"

export const addMember = async (setStatus, student, groupId, close, groupDetail, setGroupDetail) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.post(getAllGroupsUrl+groupId+'/members', {studentId: student.id}, {withCredentials: true})
        setStatus(responseStatus.SUCCESS)
        setGroupDetail({...groupDetail, members:[...groupDetail.members, student]})
        alert(response.data.message)
        close()
    }catch(e){
        setStatus(responseStatus.ERROR)
        console.log(e)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
    }
}