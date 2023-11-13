import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import { message } from 'antd';
import { useState, useEffect } from 'react';

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
    } = useTimeStore();

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
            if (startHour <= firstSelectHour!) {
                if (startHour === firstSelectHour) {
                    if (startMin < firstSelectMin!) {        
                        setIsPrevTimes(true);
                    }
                }

                else {
                    setIsPrevTimes(true);
                }                       
            }
        }

        else if (selectStatus === 'LAST_SELECT') {
            if (startHour >= lastSelectHour!) {
                if (startHour === lastSelectHour) {
                    if (startMin > lastSelectMin! && !isPrevTimes) {
           
                        setIsOverTimes(true);
                    } 

                    else if (startMin < lastSelectMin! && !isPrevTimes) {
                        setIsSelected(true);
                    }
                }

                else {        
                    setIsOverTimes(true);
                }
            }

            else if (startHour < lastSelectHour! && !isPrevTimes && lastSelectHour! >= firstSelectHour!) {                
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
