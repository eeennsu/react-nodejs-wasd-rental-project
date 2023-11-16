import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import MainLogo from '../components/MainLogo';

const RootLayout: FC = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />                    
            <MainLogo />    
            <Outlet />
        </div>
    );
};

export default RootLayout;