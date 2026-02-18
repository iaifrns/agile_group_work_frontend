import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { responseStatus } from '../assets/enum/responseStatus';
import { checkToken } from '../services/checkToken';

const CheckAuthentification = () => {

    const navigateTo = useNavigate()

    const [id, setId] = useState()
    const [status, setStatus] = useState(responseStatus.PENDING)

    useEffect(() => {
        checkToken(setStatus, setId)
        /* if(status != responseStatus.PENDING){
            console.log("some things in live")
            if(id){
                navigateTo('/profile')
            }else{
                navigateTo('/login')
            }
        } */
    },[status])

    return (
        <div>
            {status}
            {id}
        </div>
    );
}

export default CheckAuthentification;
