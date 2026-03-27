import axios from "axios"
import { updateNotifications } from "../constants/endpoints"

export const setNotificationsToSeen = async (setNotifications, notifList) => {
    try{
        const response = await axios.put(updateNotifications, {notificationList:notifList}, {withCredentials:true})
        if(response.data.success) {
            setNotifications([])
        }
    }catch(e){
        console.log(e)
    }
}