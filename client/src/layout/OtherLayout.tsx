import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../pages/RentPage/features/Step/content/DescTool/Modal';

const OtherLayout: FC = () => {

    return (
        <div className='flex flex-col flex-1'>
            <main className='flex flex-col flex-1 w-full h-full max-w-6xl mx-auto'>
                <Outlet />        
            </main>  
            <Modal />
        </div>                 
    );
};

export default OtherLayout;
