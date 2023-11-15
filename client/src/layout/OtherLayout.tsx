import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../pages/RentPage/features/Step/content/DescTool/Modal';

const OtherLayout: FC = () => {

    return (
        <div className='flex flex-col'>
            <main className='flex flex-1 w-full max-w-6xl mx-auto 2xl'>
                <Outlet />        
            </main>  
            <Modal />
        </div>                 
    );
};

export default OtherLayout;
