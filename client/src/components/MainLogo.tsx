import type { FC } from 'react';
import logo from '../assets/images/logo3.png';

const MainLogo: FC = () => {

    return (
        <div className='flex justify-center w-full mt-3'>
            <img src={logo} className='object-contain h-10'/> 
        </div>
    );
};

export default MainLogo;