import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo3.png';
import useStoreController from '../hooks/commons/useStoreController';

const MainLogo: FC = () => {

    const { setAllStoreInit } = useStoreController();

    return (
        <div className='flex justify-center w-full mt-3' onClick={setAllStoreInit}>
            <Link to='/main'>
                <img src={logo} className='object-contain h-10'/> 
            </Link>
        </div>
    );
}

export default MainLogo;