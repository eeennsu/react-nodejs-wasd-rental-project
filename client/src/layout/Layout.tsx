import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: FC = () => {

    return (
        <div className='flex flex-col min-h-screen text-black'>
            <Header />                                  
            <main className='flex-1 bg-yellow-100'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
