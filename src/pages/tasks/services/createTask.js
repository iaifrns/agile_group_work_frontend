import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { createTaskUrl } from "../../../constants/endpoints"

export const createTask = async (setStatus, data, close, tasks, setTasks) => {
    try{
        console.log(data)
        setStatus(responseStatus.PENDING)
        const response = await axios.post(createTaskUrl, {...data}, {withCredentials: true})
        setStatus(responseStatus.SUCCESS)
        alert(response.data.message)
        console.log(response.data.data)
        setTasks([...tasks, {
            id: response.data.data.id,
            title: response.data.data.title,
            desc: response.data.data.desc,
            status: response.data.data.status,
            category: response.data.data.category,
            type: response.data.data.type,
            students: response.data.data.students,
            due: response.data.data.dueDate,
            createdAt: response.data.data.createdAt
        }])
        close()
    }catch(e){
        console.log(e)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
        setStatus(responseStatus.ERROR)
    }
}