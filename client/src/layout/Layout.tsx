import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Modal from '../pages/RentPage/features/Modal/Modal';
import MainLogo from '../components/MainLogo';

const Layout: FC = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />                    
            <MainLogo />              
            <main className='flex flex-1 w-full max-w-6xl mx-auto'>
                <Outlet />
            </main>        
            <Footer />
            <Modal />
        </div>
    );
};

export default Layout;
