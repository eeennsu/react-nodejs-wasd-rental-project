import type { FC } from 'react';
import { useTimeStore } from '../../../../../../../zustand';
import { message } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import { RentaledTime } from '../../../../../utils/timePicker';
import { Dayjs } from 'dayjs';

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
        timeBtnsResetTrigger, rentalDate
    } = useTimeStore();

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isPrevTimes, setIsPrevTimes] = useState<boolean>(false);
    const [isOverTimes, setIsOverTimes] = useState<boolean>(false);
    const [isRentaled, setIsRentaled] = useState<boolean>(false);

    const background = useMemo(() => {
        return isRentaled ? 'bg-green-300' : roomStatus ===  'DISABLED' ? 'bg-04' : ((roomStatus === 'SELECTABLE' && isSelected) ? 'bg-01' : 'bg-02');
    }, [isRentaled, roomStatus, isSelected]);

    const handleSelectRoom = () => {
        if (isRentaled) {
            message.warning('이미 대여 중인 강의실 입니다.');
            
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

    // useEffect(() => {
    //     if (rentalDate) {
    //         const idx = rentaledDates.findIndex((date) => {
    //             return (
    //                 date.get('year') === rentalDate.get('year') &&
    //                 date.get('month') === rentalDate.get('month') &&
    //                 date.get('date') === rentalDate.get('date')
    //             );
    //         });

    //         console.log(rentaledDates[idx]);
    //     }
    // }, [rentalDate, rentaledDates]);

    useEffect(() => {
        if (rentalDate) {
            rentaledTimes.forEach((time) => {                
                const { hour: rentalHour, min: rentalMin } = time[0];
                const { hour: returnHour, min: returnMin } = time[1];
                
                const _returnMin = returnMin - 10;     
                
                if (startHour >= rentalHour && startHour <= returnHour) {
                    if ((startHour === rentalHour && startMin < rentalMin) || (startHour === returnHour && startMin > _returnMin)) {
                        return;                 
                    } 
                    setIsRentaled(true);
                } else {
                    console.log('??');
                }          
            });
        } 
        // console.log(rentaledTimes);
    }, [rentaledTimes, rentalDate]);

    // useEffect(() => {
    //     if (!rentaledDates || !returnedDates) {
    //         return;
    //     }

    //     console.log(returnedDates);
    // }, [rentaledDates, returnedDates]);

    // useEffect(() => {
    //     if (rentalDate && rentaledDates.length >= 1) {
    //         rentaledDates.map((date, i) => {

    //             // console.log(date.get('month') === rentalDate.get('month') && date.get('date') === rentalDate.get('date'));
    //             if (date.get('year') === rentalDate.get('year') && date.get('month') === rentalDate.get('month') && date.get('date') === rentalDate.get('date')) {
    //                 // console.log(date);
    //                 rentaledTimes.map((time) => {
    //                     const { hour: rentalHour, min: rentalMin } = time[0];
    //                     const { hour: returnHour, min: returnMin } = time[1];
                        
    //                     const _returnMin = returnMin - 10;     
        
    //                     if (startHour >= rentalHour && startHour <= returnHour) {
    //                         if ((startHour === rentalHour && startMin < rentalMin) || (startHour === returnHour && startMin > _returnMin)) {
    //                             return;                 
    //                         } 
    //                         setIsRentaled(true);
    //                     } 
    //                 });
    //             }
    //         });
    //     }

    //     rentaledTimes.map((time) => {
    //         const { hour: rentalHour, min: rentalMin } = time[0];
    //         const { hour: returnHour, min: returnMin } = time[1];
            
    //         const _returnMin = returnMin - 10;     

    //         rentaledDates.map((date) =>)
    //         if (startHour >= rentalHour && startHour <= returnHour) {
    //             if ((startHour === rentalHour && startMin < rentalMin) || (startHour === returnHour && startMin > _returnMin)) {
    //                 return;                 
    //             } 
    //             setIsRentaled(true);
    //         } 
    //     });
        
    // }, [rentalDate, rentaledDates]);

    return (
        <button 
            className={`w-2 h-10 transition-colors ${background} ${(isPrevTimes || isOverTimes) && 'bg-03 '} ${(!isPrevTimes && !isOverTimes) && 'hover:brightness-110'}`} 
            onClick={handleSelectRoom}  
            disabled={roomStatus === 'DISABLED' || (isPrevTimes || isOverTimes)}
        />
    );
};

export default MinArea;
