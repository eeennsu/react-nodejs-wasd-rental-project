import type { FC } from 'react';
import { useStepStore } from '../../../../../../zustand';
import Button from '../../../../../../components/Button';

const DescToolButtons: FC = () => {

    const { setIsModalOpen ,setSystemStep } = useStepStore();
 
    const handleRepairStep = () => {        
        setSystemStep('TOOL_REPAIR');
        setIsModalOpen(false);
    }

    const handleRentStep = () => {
        setSystemStep('TOOL_RENT');
        setIsModalOpen(false);
    }

    return (
        <footer role='modal-footer' className='flex justify-end gap-3'>
            <Button bgColor='01' onClick={handleRepairStep}>
                수리 요청
            </Button>
            <Button bgColor='01' onClick={handleRentStep} >
                대여 하기
            </Button>
        </footer>   
    );
};

export default DescToolButtons;