import type { FC } from 'react';
import Button from '../../../../../../components/Button';
import { useStepStore } from '../../../../../../zustand';

const DescRoomButtons: FC = () => {

    const { setSystemStep, selectedRoom, setSelectedRoom } = useStepStore();

    const handleInitStep = () => {
        setSystemStep('INIT');
        selectedRoom && setSelectedRoom(null);
    }

    const handleRentStep = () => {
        setSystemStep('LR_RENT');
    } 

    return (
        <footer className='flex justify-end gap-3 p-4'>
            <Button onClick={handleInitStep} bgColor='02'>
                돌아 가기
            </Button> 
            <Button onClick={handleRentStep} bgColor='01' disabled={!Boolean(selectedRoom)}>
                대여 하기
            </Button>           
        </footer>
    );
};

export default DescRoomButtons;