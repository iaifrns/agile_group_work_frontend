import axios from "axios"
import { responseStatus } from "../../../assets/enum/responseStatus"
import { ScheduleUrl } from "../../../constants/endpoints"

export const updateSchedule = async (setStatus, data, schedule, setScheduleList, scheduleList, close) => {
    try{
        setStatus(responseStatus.PENDING)
        const response = await axios.put(ScheduleUrl+'update/'+schedule.id, data, {withCredentials:true})
        const newList = scheduleList.filter(sch => sch.id != schedule.id)
        setScheduleList([...newList, {...schedule, title: data.title, desc: data.desc, date: data.date}])
        setStatus(responseStatus.SUCCESS)
        alert(response.data.message)
        close()
    }catch(e){
        console.log(e)
        setStatus(responseStatus.ERROR)
        if(e.response.data.message){
            alert(e.response.data.message)
        }
    }
}