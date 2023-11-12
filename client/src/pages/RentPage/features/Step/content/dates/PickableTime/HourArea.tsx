import type { FC } from 'react';
import MinArea from './MinArea';
import { minutes } from '../../../../../constants';

type Props = {
    startHour: number;
    resetRerender: boolean;
}

const HourArea: FC <Props> = ({ startHour, resetRerender }) => {

    return (
        <div className='relative flex flex-col items-center'>
            <div className='flex gap-[2px]'>
                {
                    minutes.map((min, i) => (
                        <MinArea key={min} startHour={startHour} startMin={(i) * 10} resetRerender={resetRerender} />
                    ))
                }
            </div>            
            <span className='absolute text-xs font-extrabold -bottom-3'>{startHour}</span>
        </div>
    );
};

export default HourArea;