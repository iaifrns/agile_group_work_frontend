import React from 'react';
import Loader from '../assets/icons/loader';
import '../css/loader.css'

const LoaderPage = () => {
    return (
        <div className='loader_page'>
            <Loader color={'#5051F9'} w='80' h='80' />
            <p>Loading...</p>
        </div>
    );
}

export default LoaderPage;
