import { useEffect, type FC } from 'react';
import { useStepStore, useTimeStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';
import { notification } from 'antd';
import DatePicker from '../dates/DatePicker';
import TimePicker from '../dates/PickableTime/TimePicker';
import Button from '../../../../../../components/Button';
import RentReson from './RentalReson';
import useNotClassroomCount from '../../../../queries/rental/useNotClassroomCount';
import FetchDatasError from '../../../RentalProcessor/Main/Datas/teplate/FetchDatasError';

const RentalRoomForm: FC = () => {
    
    const selectedRoom = useStepStore(state => state.selectedRoom);
       
    const { data: rentalHours, isLoading, error } = useNotClassroomCount(selectedRoom!);

    const { resetTimes, setTimeBtnsResetTrigger } = useTimeStore(state => ({
        resetTimes: state.resetTimes, 
        setTimeBtnsResetTrigger: state.setTimeBtnsResetTrigger
    }), shallow);

    const handleResetTimes = () => {
        resetTimes();
        setTimeBtnsResetTrigger();
    }

    useEffect(() => {
        notification.info({
            message: 'Notification',
            description: '대여 중인 시간을 제외하고 선택해 주세요!',
            placement: 'bottomRight',
            duration: 3
        })
    }, []);

    return (
        <section className='flex flex-col w-full gap-4 px-[50px] py-[22px] mt-4 bg-04 h-full'>
            {
                isLoading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    <>
                        <h3 className='mb-2 text-2xl font-semibold'>
                            {selectedRoom}
                        </h3>
                        <div className='flex justify-between'>
                            <DatePicker type='date' />      
                            <Button onClick={handleResetTimes} bgColor='01'>
                                다시 선택하기
                            </Button>  
                        </div>
                        <TimePicker classroomRentalInfos={rentalHours?.result}/>
                        <RentReson />     
                    </>
                )                   
            }        
        </section>
    );
};

export default RentalRoomForm;






const Loading: FC = () => {
    
    return (
        <div className='flex items-center justify-center h-full'>
            <span className="loading loading-bars loading-sm md:loading-lg" />
        </div>
    );
}

const Error: FC = () => {

    return (
        <div className='flex h-full'>
            <FetchDatasError />
        </div>
    );
}
