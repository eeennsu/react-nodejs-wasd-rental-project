import { useEffect, type FC } from 'react';
import { useStepStore } from '../../../../../../zustand';
import { notification } from 'antd';
import DatePicker from '../dates/DatePicker';
import TimePick from '../dates/PickableTime/TimePick';
import RentReson from './RentalReson';
import useNotClassroomCount from '../../../../queries/rental/useNotClassroomCount';
import FetchDatasError from '../../../RentalProcessor/Main/Datas/teplate/FetchDatasError';

const RentalRoomForm: FC = () => {
    
    const selectedRoom = useStepStore(state => state.selectedRoom);
       
    const { data: rentalInfos, isLoading, error } = useNotClassroomCount(selectedRoom!);

    useEffect(() => {
        notification.info({
            message: 'Notification',
            description: '대여 중인 시간을 제외하고 선택해 주세요!',
            placement: 'topRight',
            duration: 3
        });
    }, []);
    
    return (
        <section className='flex flex-col w-full gap-4 px-[48px] py-[20px] mt-4 bg-04 h-full'>
            {
                isLoading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    <>
                        <h3 className='text-xl font-bold max-lg:text-center'>
                            {selectedRoom || <span className='text-sm text-red-400 underline'>강의실 이름을 확인할 수 없습니다. 관리자에게 문의해 주세요.</span>}
                        </h3>                  
                        <div className='flex max-lg:justify-center'>
                            <DatePicker type='date' />  
                        </div>
                        <TimePick classroomRentalInfos={rentalInfos?.result}/>
                        <div className='max-lg:mt-4'>
                            <RentReson /> 
                        </div>                   
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