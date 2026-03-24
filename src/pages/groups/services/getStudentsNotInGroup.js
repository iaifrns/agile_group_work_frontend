import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { getAllStudentNotInGroupUrl } from "../../../constants/endpoints"

export const getStudentNotInGroup = async (setStatus, setStudentList, groupId) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.get(getAllStudentNotInGroupUrl+groupId, {withCredentials:true})
        console.log(response.data)
        setStudentList(response.data.students)
        setStatus(responseStatus.SUCCESS)
    }catch(e){
        setStatus(responseStatus.ERROR)
        console.log(e)
        if(e.response.data.message) {
            alert(e.response.data.message)
        }
    }
}