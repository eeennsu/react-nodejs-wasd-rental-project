import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import { message } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import { RentaledTime } from '../../../../../utils/timePicker';

type Props = {
    startHour: number;
    startMin: number;
    rentaledTimes: RentaledTime[][];
}

const MinArea: FC<Props> = ({ startHour, startMin, rentaledTimes }) => {

    const { 
        roomStatus, selectStatus, setSelectStatus,
        firstSelectHour, firstSelectMin,
        lastSelectHour, lastSelectMin,
        setFirstSelectHour, setFirstSelectMin,
        setLastSelectHour, setLastSelectMin,
        timeBtnsResetTrigger, rentalDate,
        closestRentaledTime, setClosestRentaledTime
    } = useTimeStore();

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isPrevTimes, setIsPrevTimes] = useState<boolean>(false);
    const [isOverTimes, setIsOverTimes] = useState<boolean>(false);
    const [isRentaled, setIsRentaled] = useState<boolean>(false);

    const background: string = useMemo(() => {
        return isRentaled ? 'bg-green-300' : roomStatus ===  'DISABLED' ? 'bg-04' : ((roomStatus === 'SELECTABLE' && isSelected) ? 'bg-01' : 'bg-02');
    }, [isRentaled, roomStatus, isSelected]);

    const isRentaledDuringTime: boolean = useMemo(() => {
        if (!rentalDate || !rentaledTimes) return false;

        return rentaledTimes.some((time) => {
            const [rentalTime, returnTime] = time;
            const { hour: rentalHour, min: rentalMin } = rentalTime;
            const { hour: returnHour, min: returnMin } = returnTime;
            const _returnMin = returnMin - 10;    

            return (
                (startHour >= rentalHour) && 
                (startHour <= returnHour) && 
                !((startHour === rentalHour && startMin < rentalMin) || (startHour === returnHour && startMin > _returnMin))
            );
        });
    }, [rentalDate, rentaledTimes, startHour, startMin]);

    const handleSelectRoom = () => {
        if (isRentaled) {
            message.warning('이미 대여 중인 시간입니다.');
            
            return;
        }

        switch(selectStatus) {
            case 'NONE' : 
                setIsSelected(true);
                setSelectStatus('FIRST_SELECT');
                setFirstSelectHour(startHour);
                setFirstSelectMin(startMin);  

                break;

            case 'FIRST_SELECT' :
                setIsSelected(true);
                setSelectStatus('LAST_SELECT');    
                setLastSelectHour(startHour);
                setLastSelectMin(startMin);    

                break;

            case 'LAST_SELECT':
                message.info('시간이 선택되었습니다. 대여를 진행해 주세요!');

                break;
        }
    }

    // 1. 첫번째 클릭했을 때 가장 다음으로 가까운 렌탈된 스타트 시간과 분을 전역적으로 설정함
    // 2. 현재 MinArea가 1번에서 설정한 시간보다 크고, 렌탈된 시간이 아니면 선택할 수 없도록 함

    useEffect(() => {
        switch(selectStatus) {
            case 'FIRST_SELECT': 
                if (firstSelectHour && startHour <= firstSelectHour) {
                    if (startHour === firstSelectHour) {
                        if (firstSelectMin && startMin < firstSelectMin && !isRentaled) {        
                            setIsPrevTimes(true);
                        }
                    }

                    else {
                        if (!isRentaled) {
                            setIsPrevTimes(true);
                        }
                    }                       
                }
                
                let closest: RentaledTime = {
                    hour: 1000,
                    min: 1000,
                };

                const filtered = rentaledTimes.map((times) => {
                    const [rentaledStartTime] = times;

                    if (closest.hour <= rentaledStartTime.hour) {

                    }
                });

                // rentaledTimes.filter((time) => {
                //     console.log(time);
                // });
               
                break;

            case 'LAST_SELECT': 
                if (lastSelectHour && startHour >= lastSelectHour) {
                    if (startHour === lastSelectHour) {
                        if (startMin > lastSelectMin! && !isPrevTimes && !isRentaled) {           
                            setIsOverTimes(true);
                        } 

                        else if (startMin < lastSelectMin! && !isPrevTimes) {
                            setIsSelected(true);
                        }
                    }

                    else {        
                        if (!isRentaled) {
                            setIsOverTimes(true);
                        }
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

    useEffect(() => {
        setIsRentaled(isRentaledDuringTime);
    }, [rentaledTimes, rentalDate]);

    return (
        <button 
            className={`w-2 h-10 transition-colors ${background} ${(isPrevTimes || isOverTimes) && 'bg-03 '} ${(!isPrevTimes && !isOverTimes) && 'hover:brightness-110'}`} 
            onClick={handleSelectRoom}  
            disabled={roomStatus === 'DISABLED' || (isPrevTimes || isOverTimes)}
        />
    );
};

export default MinArea;