import type { FC } from 'react';
import { useStepStore, useToolStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';
import Button from '../../../../../../components/Button';

const DescToolButtons: FC = () => {

    const { setIsModalOpen ,setSystemStep } = useStepStore(state => ({
        setIsModalOpen: state.setIsModalOpen, setSystemStep: state.setSystemStep
    }), shallow);

    const toolState = useToolStore(state => state.tool?.tool_state);
    const isNotRental = toolState !== '대여가능';
 
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
            <Button bgColor='01' className={`${isNotRental && 'opacity-70'}`} onClick={handleRentStep} disabled={isNotRental}>
                대여 하기
            </Button>
        </footer>   
    );
};

export default DescToolButtons;