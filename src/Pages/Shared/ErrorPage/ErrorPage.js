import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p className='text-red-500'>Wrong acces, Try again!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <img src='' alt="" />
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and Try again.</h4>
        </div>
    );
};

export default ErrorPage;