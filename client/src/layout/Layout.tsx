import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Modal from '../pages/RentPage/features/Modal/Modal';

const Layout: FC = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />                                  
            <main className='flex flex-1'>
                <Outlet />
            </main>
            <Footer />
            <Modal />
        </div>
    );
};

export default Layout;
