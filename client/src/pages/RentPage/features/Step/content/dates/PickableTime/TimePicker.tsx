import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import HourArea from './HourArea';
import Button from '../../../../../../../components/Button';
import { useState } from 'react';
import { hours } from '../../../../../constants';

const TimePicker: FC = () => {

    const { resetTimes } = useTimeStore();
    const [resetRerender, setResetRerender] = useState<boolean>(false);
    const handleResetTimes = () => {
        resetTimes();
        handleRerender();
    }

    const handleRerender = () => {
        setResetRerender(prev => !prev);
    }

    return (
        <div className='relative'>
            <div className='flex gap-x-[10px] gap-y-[10px] flex-wrap'>
                {
                    hours.map((hour, i) => (
                        <HourArea key={hour} startHour={(i+1) + 8} resetRerender={resetRerender} />
                    ))
                }
            </div>
            <Button className='absolute bottom-0 right-0' onClick={handleResetTimes} bgColor='01'>
                다시 선택하기
            </Button>
        </div>
    );
};

export default TimePicker;