import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { hours } from '../../../../../constants';
import { type RentaledTime, getHoursFormat } from '../../../../../utils/timePicker';
import { useTimeStore } from '../../../../../../../zustand';
import HourArea from './HourArea';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
    classroomRentalInfos?: ClassroomRentalInfo[];
}

const TimePicker: FC<Props> = ({ classroomRentalInfos }) => {

    const selectDate = useTimeStore(state => state.rentalDate);

    const [rentaledTimes, setRentaledTimes] = useState<RentaledTime[][]>([]); 

    useEffect(() => {
        if (!selectDate || !classroomRentalInfos) return;

        classroomRentalInfos?.map((reservedRoom) => {   
            const rentaledDateOffset = dayjs.tz(reservedRoom.rental_date, 'Asia/Seoul');
            const selectDateOffset = dayjs.tz(selectDate, 'Asia/Seoul');
    
            if (rentaledDateOffset.get('year') === selectDateOffset.get('year') && rentaledDateOffset.get('month') === selectDateOffset.get('month') && rentaledDateOffset.get('date') === selectDateOffset.get('date')) {
                setRentaledTimes(prev => [...prev, [getHoursFormat(reservedRoom.rental_date), getHoursFormat(reservedRoom.rental_due_date)]]);
            }
        }); 
    }, [selectDate, classroomRentalInfos]);

    useEffect(() => {
        setRentaledTimes([]);
    }, [selectDate]);

    return (
        <section className='relative'>
            <div className='flex gap-x-[10px] gap-y-[16px] flex-wrap'>
                {
                    hours.map((hour, i) => (
                        <HourArea key={hour} startHour={(i+1) + 8} rentaledTimes={rentaledTimes} />
                    ))
                }
            </div>
        </section>
    );
};

export default TimePicker;


    /*
        [
            [
                {
                    hour: 09,               // 렌탈 시각            유저 1
                    min: 40                 // 렌탈 분
                },
                {
                    hour: 10,               // 반납 시각
                    min: 30                 // 반납 분
                }
            ],                  
            [
                {
                    hour: 09,               // 렌탈 시각            유저 2
                    min: 40                 // 렌탈 분
                },
                {
                    hour: 10,               // 반납 시각
                    min: 30                 // 반납 분
                }
            ]
        ]
    */
