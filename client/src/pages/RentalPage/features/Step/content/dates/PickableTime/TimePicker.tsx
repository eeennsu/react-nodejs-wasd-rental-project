import type { FC } from 'react';
import { hours } from '../../../../../constants';
import { useStepStore } from '../../../../../../../zustand';
import HourArea from './HourArea';
import useNotClassroomCount from '../../../../../queries/rental/useNotClassroomCount';
import FetchDatasError from '../../../../RentalProcessor/Main/Datas/teplate/FetchDatasError';

const TimePicker: FC = () => {

    const selectedRoom = useStepStore(state => state.selectedRoom);
    
    const { data, isLoading, error } = useNotClassroomCount(selectedRoom!);
    console.log('data', data);
    return (
        <div className='relative'>
            <div className='flex gap-x-[10px] gap-y-[10px] flex-wrap'>
                {
                    isLoading ? (
                        <Loading />
                    ) : error ? (
                        <Error />
                    ) : (
                        hours.map((hour, i) => (
                            <HourArea key={hour} startHour={(i+1) + 8} />
                        ))
                    )                   
                }
            </div>
        </div>
    );
};

export default TimePicker;



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