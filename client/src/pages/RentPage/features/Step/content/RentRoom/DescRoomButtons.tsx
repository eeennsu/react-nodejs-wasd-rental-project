import type { FC } from 'react';
import Button from '../../../../../../components/Button';
import useStepStore from '../../../../../../zustand/suppliesStore/useStepStore';

const DescRoomButtons: FC = () => {

    const { setSystemStep } = useStepStore();

    const handleInitStep = () => {
        setSystemStep('INIT');
    }

    const handleRentStep = () => {
        setSystemStep('LR_RENT');
    } 

    return (
        <footer className='flex justify-end gap-3'>
            <Button onClick={handleInitStep}  bgColor='02'>
                돌아 가기
            </Button> 
            <Button onClick={handleRentStep}  bgColor='01'>
                예약 하기
            </Button>           
        </footer>
    );
};

export default DescRoomButtons;