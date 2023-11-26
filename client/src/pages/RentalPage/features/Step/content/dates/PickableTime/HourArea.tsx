import type { FC } from 'react';
import { minutes } from '../../../../../constants';
import MinArea from './MinArea';

type Props = {
    startHour: number;
}

const HourArea: FC <Props> = ({ startHour }) => {

    return (
        <div className='relative flex flex-col items-center'>
            <div className='flex gap-[2px]'>
                {
                    minutes.map((min, i) => (
                        <MinArea key={min} startHour={startHour} startMin={i * 10} />
                    ))
                }
            </div>            
            <span className='absolute text-xs font-extrabold -bottom-3'>
                {startHour}
            </span>
        </div>
    );
};

export default HourArea;