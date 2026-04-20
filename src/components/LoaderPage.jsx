import React from 'react';
import Loader from '../assets/icons/loader';
import '../css/loader.css'
  {/* LoaderPage component is used to render the loading page when the application is fetching data from the backend, it will display a loading icon and a loading text */}
const LoaderPage = () => {
    return (
        <div className='loader_page'>
            <Loader color={'#5051F9'} w='80' h='80' />
            <p>Loading...</p>
        </div>
    );
}

export default LoaderPage;
