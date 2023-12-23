import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../pages/RentalPage/features/Step/content/DescTool/Modal';
import MainLogo from '../components/MainLogo';

type Props = {
    isLogo: boolean;
}

const OtherLayout: FC<Props> = ({ isLogo = true }) => {

    return (
        <>
            {isLogo && <MainLogo /> }
            <main className='flex flex-col flex-1 w-full h-full max-w-6xl mx-auto'>
                <Outlet />        
            </main>  
            <Modal />
        </>                 
    );
}

export default OtherLayout;
