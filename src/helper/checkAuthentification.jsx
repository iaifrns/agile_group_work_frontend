import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckAuthentification = () => {

    const navigateTo = useNavigate()

    useEffect(() => {
        navigateTo('/login')
    },[])

    return (
        <div>
            
        </div>
    );
}

export default CheckAuthentification;
