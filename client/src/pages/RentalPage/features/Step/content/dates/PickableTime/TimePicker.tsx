import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { hours } from '../../../../../constants';
import HourArea from './HourArea';
import { type RentaledTime, getHoursFormat } from '../../../../../utils/timePicker';

type Props = {
    classroomRentalInfos?: ClassroomRentalInfo[];
}

const TimePicker: FC<Props> = ({ classroomRentalInfos }) => {

    const [rentaledHours, setRentaledHours] = useState<RentaledTime[][]>([]); 
    console.log('classroomRentalInfos', classroomRentalInfos);

    useEffect(() => {
        classroomRentalInfos?.map((info, i) => {
            setRentaledHours(prev => [...prev, [getHoursFormat(info.rental_date), getHoursFormat(info.rental_due_date)]])
        })
    }, []);

    useEffect(() => {
        console.log(rentaledHours);
    }, [rentaledHours]);

    return (
        <div className='relative'>
            <div className='flex gap-x-[10px] gap-y-[10px] flex-wrap'>
                {
                    hours.map((hour, i) => (
                        <HourArea key={hour} startHour={(i+1) + 8} />
                    ))
                }
            </div>
        </div>
    );
};

export default TimePicker;