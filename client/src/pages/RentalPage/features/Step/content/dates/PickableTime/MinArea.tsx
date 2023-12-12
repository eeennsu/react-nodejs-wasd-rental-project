import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import { message } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import { RentaledTime } from '../../../../../utils/timePicker';
import { shallow } from 'zustand/shallow';
import { messages } from '../../../../../constants';

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
    } = useTimeStore(state => ({
        roomStatus: state.roomStatus, selectStatus: state.selectStatus, setSelectStatus: state.setSelectStatus,
        firstSelectHour: state.firstSelectHour, firstSelectMin: state.firstSelectMin,
        lastSelectHour: state.lastSelectHour, lastSelectMin: state.lastSelectMin,
        setFirstSelectHour: state.setFirstSelectHour, setFirstSelectMin: state.setFirstSelectMin,
        setLastSelectHour: state.setLastSelectHour, setLastSelectMin: state.setLastSelectMin,
        timeBtnsResetTrigger: state.timeBtnsResetTrigger, rentalDate: state.rentalDate,
        closestRentaledTime: state.closestRentaledTime, setClosestRentaledTime: state.setClosestRentaledTime
    }), shallow);

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isPrevTimes, setIsPrevTimes] = useState<boolean>(false);
    const [isOverTimes, setIsOverTimes] = useState<boolean>(false);
    const [isRentaled, setIsRentaled] = useState<boolean>(false);
    const [isCanNotRentalTime, setIsCanNotRentalTime] = useState<boolean>(false);

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
            message.warning(messages.alreadyRental);
            
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
                message.info(messages.selectedTime);

                break;
        }
    }

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
                    min: 1000
                };

                rentaledTimes.forEach((times) => {
                    const [rentaledStartTime, rentalEndTime] = times;
                   
                    if (rentaledStartTime.hour >= firstSelectHour! && (rentaledStartTime.hour <= closest.hour)) {
                        closest = {
                            hour: rentaledStartTime.hour,
                            min: Math.max(rentaledStartTime.min, rentalEndTime.min)
                        }                  
                    }                  
                });          

                setClosestRentaledTime(closest);

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
        if (isPrevTimes) setIsPrevTimes(false);
        if (isOverTimes)  setIsOverTimes(false);
        if (isCanNotRentalTime) setIsCanNotRentalTime(false); 
        if (firstSelectHour) setFirstSelectHour(null);
        if (lastSelectHour) setFirstSelectHour(null);
        if (selectStatus !== 'NONE') setSelectStatus('NONE'); 
    }, [timeBtnsResetTrigger, rentalDate]);

    useEffect(() => {
        setIsRentaled(isRentaledDuringTime);
    }, [rentaledTimes, rentalDate]);

    useEffect(() => {
        if (!closestRentaledTime || !firstSelectHour) return;

        if (closestRentaledTime.hour >= startHour) {
            if (startHour === closestRentaledTime.hour && closestRentaledTime.min <= startMin) {
                setIsCanNotRentalTime(true);
            } 
        } else if (startHour >= closestRentaledTime.hour) {
            setIsCanNotRentalTime(true);
        }
    }, [closestRentaledTime]);
    
    return (
        <button 
            className={`w-4 h-14 md:w-2 md:h-10 transition-colors ${background} ${(isPrevTimes || isOverTimes || isCanNotRentalTime) && 'bg-03 '} ${(!isPrevTimes && !isOverTimes && !isCanNotRentalTime) && 'hover:brightness-110'}`} 
            onClick={handleSelectRoom}  
            disabled={roomStatus === 'DISABLED' || (isPrevTimes || isOverTimes || (isCanNotRentalTime && !isRentaled))}
        />
    );
};

export default MinArea;