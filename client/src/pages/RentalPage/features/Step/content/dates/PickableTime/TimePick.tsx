import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { hours } from '../../../../../constants';
import { useTimeStore } from '../../../../../../../zustand';
import { type RentaledTime, getHoursFormat } from '../../../../../utils/timePicker';
import dayjs, { type Dayjs } from 'dayjs';
import HourArea from './HourArea';

type Props = {
    classroomRentalInfos?: ClassroomRentalInfo[];
}

const TimePick: FC<Props> = ({ classroomRentalInfos }) => {

    const selectDate = useTimeStore(state => state.rentalDate);

    const [rentaledTimes, setRentaledTimes] = useState<RentaledTime[][]>([]); 
    const refSelectDate = useRef<Dayjs | null>(selectDate);
    
    useEffect(() => {
        if (selectDate !== refSelectDate.current) {    
            setRentaledTimes([]);
            refSelectDate.current = selectDate;
        } 
    }, [selectDate]);

    useEffect(() => {
        if (!selectDate || !classroomRentalInfos) return;
        if (refSelectDate.current === null) refSelectDate.current = selectDate;
       
        const matchedDayRoomInfos = classroomRentalInfos?.filter((reservedRoom) => {   
            const rentaledDateOffset = dayjs.tz(reservedRoom.rental_date, 'Asia/Seoul');
            const selectDateOffset = dayjs.tz(selectDate, 'Asia/Seoul');
    
            return rentaledDateOffset.get('year') === selectDateOffset.get('year') && rentaledDateOffset.get('month') === selectDateOffset.get('month') && rentaledDateOffset.get('date') === selectDateOffset.get('date');
        }); 

        matchedDayRoomInfos.map((reservedRoom) => {
            setRentaledTimes(prev => [...prev, [getHoursFormat(reservedRoom.rental_date), getHoursFormat(reservedRoom.rental_due_date)]]);
        });
    }, [selectDate, classroomRentalInfos]);

    return (
        <div className='flex gap-x-6 gap-y-5 md:gap-x-[10px] md:gap-y-4 flex-wrap max-lg:justify-center'>
            {
                hours.map((hour, i) => (
                    <HourArea key={hour} startHour={(i+1) + 8} rentaledTimes={rentaledTimes} />
                ))
            }
        </div>
    );
};

export default TimePick;


// 큰 배열 : 대여정보 전체, 작은 배열 : 날짜
/*
    [
        [
            {
                hour: 09,               // 렌탈 시각            대여 하나
                min: 40                 // 렌탈 분
            },
            {
                hour: 10,               // 반납 시각
                min: 30                 // 반납 분
            }
        ],                  
        [
            {
                hour: 09,               // 렌탈 시각            대여 둘
                min: 40                 // 렌탈 분
            },
            {
                hour: 10,               // 반납 시각
                min: 30                 // 반납 분
            }
        ]

        ...
    ]
*/