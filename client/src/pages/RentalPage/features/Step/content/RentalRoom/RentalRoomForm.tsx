import type { FC } from 'react';
import { useStepStore, useTimeStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';
import DatePicker from '../dates/DatePicker';
import TimePicker from '../dates/PickableTime/TimePicker';
import Button from '../../../../../../components/Button';
import RentReson from './RentalReson';

const RentalRoomForm: FC = () => {
    
    const selectedRoom = useStepStore(state => state.selectedRoom);
    const { resetTimes, setTimeBtnsResetTrigger } = useTimeStore(state => ({
        resetTimes: state.resetTimes, 
        setTimeBtnsResetTrigger: state.setTimeBtnsResetTrigger
    }), shallow);

    const handleResetTimes = () => {
        resetTimes();
        setTimeBtnsResetTrigger();
    }

    return (
        <section className='flex flex-col w-full gap-4 px-[50px] py-[22px] mt-4 bg-04 h-full'>
            <h3 className='mb-2 text-2xl font-semibold'>
                {selectedRoom}
            </h3>
            <div className='flex justify-between'>
                <DatePicker type='date' />      
                <Button onClick={handleResetTimes} bgColor='01'>
                    다시 선택하기
                </Button>  
            </div>
            <TimePicker />
            <RentReson />     
        </section>
    );
};

export default RentalRoomForm;



