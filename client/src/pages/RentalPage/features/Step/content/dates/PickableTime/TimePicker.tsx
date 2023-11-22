import type { FC } from 'react';
import { hours } from '../../../../../constants';
import HourArea from './HourArea';

const TimePicker: FC = () => {

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