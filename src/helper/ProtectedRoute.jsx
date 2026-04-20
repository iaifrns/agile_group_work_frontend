import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../hooks/useContext';
  {/* ProtectedRoute component is used to protect the routes that require authentication, it will check if the user is authenticated by checking the id in the context, if the user is not authenticated, it will navigate to the login page, if the user is authenticated, it will render the children components */}
const ProtectedRoute = ({children}) => {
    const {id} = useContext(Context)
    if(!id){
        return <Navigate to={'/login'} replace />
    }
    return <>{children}</>;
}

export default ProtectedRoute;
