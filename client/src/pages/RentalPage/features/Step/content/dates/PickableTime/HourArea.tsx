import type { FC } from 'react';
import { minutes } from '../../../../../constants';
import { RentaledTime } from '../../../../../utils/timePicker';
import MinArea from './MinArea';

type Props = {
    startHour: number;
    rentaledHours: RentaledTime[][];
}

const HourArea: FC <Props> = ({ startHour, rentaledHours }) => {
    
    return (
        <div className='relative flex flex-col items-center'>
            <div className='flex gap-[2px]'>
                {
                    minutes.map((min, i) => (
                        <MinArea key={min} startHour={startHour} startMin={i * 10} rentaledHours={rentaledHours} />
                    ))
                }
            </div>            
            <span className='absolute text-xs font-extrabold -bottom-3.5'>
                {startHour}
            </span>
        </div>
    );
};

export default HourArea;