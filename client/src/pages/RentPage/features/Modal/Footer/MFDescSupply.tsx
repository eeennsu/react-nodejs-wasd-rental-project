import type { FC } from 'react';
import Button from '../../../../../components/Button';
import { useModalStore } from '../../../../../zustand';

const MFDescSupply: FC = () => {

    const { setModalStep } = useModalStore();
 
    const handleRepairStep = () => {        
        setModalStep('SUPPLY_REPAIR');
    }

    const handleRentStep = () => {
        setModalStep('SUPPLY_RENT');
    }

    // const hangleRent = async () => {
    //     setIsProcessLoading(true);
        
    //     await new Promise((res, rej) => {
    //         setTimeout(() => {
    //             setIsProcessLoading(false);  
    //             res(undefined);            
    //         }, 2000);           
    //     });
     
    //     setIsModalOpen(false);
    //     message.success('대여에 성공하였습니다!');
    // }  
 
    return (
        <footer role='modal-footer' className='flex justify-end gap-3'>
            <Button onClick={handleRepairStep}>
                수리 요청
            </Button>
            <Button onClick={handleRentStep}>
                대여 하기
            </Button>
        </footer>
    );
};

export default MFDescSupply;