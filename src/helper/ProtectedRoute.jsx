import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../hooks/useContext';

const ProtectedRoute = ({children}) => {
    const {id} = useContext(Context)

    if(!id){
        return <Navigate to={'/login'} replace />
    }
    return (
        {children}
    );
}

export default ProtectedRoute;
