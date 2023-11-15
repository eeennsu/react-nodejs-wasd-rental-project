import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const MainLayout: FC = () => {

    return (
        <>
            <main className='flex flex-1 bg-yellow-300'>
                <Outlet />
            </main>        
            <Footer />
        </>
    );
};

export default MainLayout;
