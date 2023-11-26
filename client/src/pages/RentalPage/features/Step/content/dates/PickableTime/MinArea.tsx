import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import { message } from 'antd';
import { useState, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

type Props = {
    startHour: number;
    startMin: number;
}

const MinArea: FC<Props> = ({ startHour, startMin }) => {

    const { 
        roomStatus,
        selectStatus, setSelectStatus,
        firstSelectHour, firstSelectMin,
        lastSelectHour, lastSelectMin,
        setFirstSelectHour, setFirstSelectMin,
        setLastSelectHour, setLastSelectMin,
        timeBtnsResetTrigger,
    } = useTimeStore(state => ({
        roomStatus: state.roomStatus,
        selectStatus: state.selectStatus, setSelectStatus: state.setSelectStatus,
        firstSelectHour: state.firstSelectHour, firstSelectMin: state.firstSelectMin, 
        lastSelectHour: state.lastSelectHour, lastSelectMin: state.lastSelectMin,
        setFirstSelectHour: state.setFirstSelectHour, setFirstSelectMin: state.setFirstSelectMin,
        setLastSelectHour: state.setLastSelectHour, setLastSelectMin: state.setLastSelectMin,
        timeBtnsResetTrigger: state.timeBtnsResetTrigger
    }), shallow);

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isPrevTimes, setIsPrevTimes] = useState<boolean>(false);
    const [isOverTimes, setIsOverTimes] = useState<boolean>(false);

    const bg = roomStatus === 'DISABLED' ? 'bg-04' : ((roomStatus === 'SELECTABLE' && isSelected) ? 'bg-01' : 'bg-02');

    const handleSelectRoom = () => {
        if (selectStatus === 'NONE') {

            setIsSelected(true);
            setSelectStatus('FIRST_SELECT');
            setFirstSelectHour(startHour);
            setFirstSelectMin(startMin);  

        } else if (selectStatus === 'FIRST_SELECT') {

            setIsSelected(true);
            setSelectStatus('LAST_SELECT');    
            setLastSelectHour(startHour);
            setLastSelectMin(startMin);    

        } else {
            message.info('시간이 선택되었습니다. 대여를 진행해 주세요!');
        }
    }

    useEffect(() => {
        if (selectStatus === 'FIRST_SELECT') {
            if (firstSelectHour && startHour <= firstSelectHour) {
                if (startHour === firstSelectHour) {
                    if (firstSelectMin && startMin < firstSelectMin) {        
                        setIsPrevTimes(true);
                    }
                }

                else {
                    setIsPrevTimes(true);
                }                       
            }
        }

        else if (selectStatus === 'LAST_SELECT') {
            if (lastSelectHour && startHour >= lastSelectHour) {
                if (startHour === lastSelectHour) {
                    if (lastSelectMin && startMin > lastSelectMin && !isPrevTimes) {
           
                        setIsOverTimes(true);
                    } 

                    else if (lastSelectMin && startMin < lastSelectMin && !isPrevTimes) {
                        setIsSelected(true);
                    }
                }

                else {        
                    setIsOverTimes(true);
                }
            }

            else if ((lastSelectHour && firstSelectHour && lastSelectHour) && startHour < lastSelectHour && !isPrevTimes && lastSelectHour >= firstSelectHour!) {                
                setIsSelected(true);
            }           
        }
    }, [selectStatus]);
    
    useEffect(() => {
        if (isSelected) setIsSelected(false);
        else if (isPrevTimes) setIsPrevTimes(false);
        else if (isOverTimes) setIsOverTimes(false);
    }, [timeBtnsResetTrigger]);

    return (
        <button 
            className={`px-1 text-white h-10 ${bg} ${(isPrevTimes || isOverTimes) && 'bg-03'}`} 
            onClick={handleSelectRoom}  
            disabled={roomStatus === 'DISABLED' || (isPrevTimes || isOverTimes)}
        />
    );
};

export default MinArea;
