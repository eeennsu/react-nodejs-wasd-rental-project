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

/*
    [
        [
            {
                hour: 9,
                min: 40              // 9시 40분
            },
            {
                hour: 12,
                min: 30,             // 12시 30분
            }
        ],
        [
            {
                hour: 16,
                min: 30             // 16시 30분
            },
            {
                hour: 18,
                min: 20,             // 18시 20분
            }
        ]
    ]  
*/

const dummy = {
    '200': 'OK',
    result: [
        {
            rental_id: 67,
            rental_date: '2023-12-08T09:40:00.000Z',            // 9시 40분
            rental_due_date: '2023-12-08T12:30:00.000Z',        // 12시 30분
            rental_state: '대여',
            rental_extend: false,       
            tool_id: '본관507호',
            user: {
                user_name: '어쩌구'
            },
            user_id: 'ㅂㅈㄷㅂㅈㄷㅂㅈ'
        },
        {
            rental_id: 68,
            rental_date: '2023-12-08T16:30:00.000Z',            // 16시 30분
            rental_due_date: '2023-12-08T18:20:00.000Z',        // 18시 20분
            rental_state: '대여',
            rental_extend: false,
            user: {
                user_name: '어쩌구'
            },
            user_id: 'ㅂㅈㄷㅂㅈㄷㅂㅈ',
            tool_id: '본관507호'
        }
    ]
} satisfies ResNotClassroomCount;

const RentalRoomForm: FC = () => {
    
    const selectedRoom = useStepStore(state => state.selectedRoom);
       
    const { data: rentalHours, isLoading, error } = useNotClassroomCount(selectedRoom!);

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
                        <h3 className='text-xl font-bold'>
                            {selectedRoom}
                        </h3>                  
                        <DatePicker type='date' />  
                        <TimePicker classroomRentalInfos={dummy.result}/>
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