import type { FC } from 'react';
import logo from '../assets/images/logo3.png';
import { Link, useLocation } from 'react-router-dom';

const MainLogo: FC = () => {

    const { pathname } = useLocation();

    return (
        !pathname.startsWith('/my-page') && (
            <div className='flex justify-center w-full mt-3'>
                <Link to='/main'>
                    <img src={logo} className='object-contain h-10'/> 
                </Link>
            </div>
        )
    );
};

export default MainLogo;