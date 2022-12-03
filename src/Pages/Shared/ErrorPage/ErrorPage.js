import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import errorimg from '../../../assets/image/error.png';

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
        <div className='w-96 mx-auto '>
            <p className='text-gray-400 text-6xl font-bold'>404</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <img src={errorimg} alt="error" className='w-28 flex align-center justify-center center'/>
            <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and Try again.</h4>
        </div>
    );
};

export default ErrorPage;