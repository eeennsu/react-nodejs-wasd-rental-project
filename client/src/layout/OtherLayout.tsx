import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../pages/RentalPage/features/Step/content/DescTool/Modal';

const OtherLayout: FC = () => {

    return (
        <>
            <main className='flex flex-col flex-1 w-full h-full max-w-6xl mx-auto'>
                <Outlet />        
            </main>  
            <Modal />
        </>                 
    );
};

export default OtherLayout;
