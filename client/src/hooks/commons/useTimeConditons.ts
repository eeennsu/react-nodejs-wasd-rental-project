import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { ITimeStore } from '../../zustand/suppliesStore/types';

type TimeConditions = {
    selectStatus: SelectStatus;
    firstSelectHour: ITimeStore['firstSelectHour']; 
    firstSelectMin: ITimeStore['firstSelectMin'];
    lastSelectHour: ITimeStore['lastSelectHour'];
    lastSelectMin: ITimeStore['lastSelectMin']; 
    startHour: number; 
    startMin: number; 
    setIsPrevTimes: Dispatch<SetStateAction<boolean | null | number>>,
    setIsOverTimes: Dispatch<SetStateAction<boolean | null | number>>
}

const useTimeConditons = ({
    firstSelectHour,
    firstSelectMin,
    lastSelectHour,
    lastSelectMin,
    selectStatus,
    setIsOverTimes,
    setIsPrevTimes,
    startHour,
    startMin
}: TimeConditions) => {
    const checkTimeConditions = (hour: number, minute: number, targetHour: number, targetMinute: number) => {
        return hour === targetHour && minute < targetMinute || hour < targetHour;
    };

    useEffect(() => {
        setIsPrevTimes(
            (selectStatus === 'FIRST_SELECT' && firstSelectHour && firstSelectMin) &&
            checkTimeConditions(startHour, startMin, firstSelectHour, firstSelectMin)
        );

        setIsOverTimes(
            (selectStatus === 'LAST_SELECT' && lastSelectHour && lastSelectMin) &&
            checkTimeConditions(lastSelectHour, lastSelectMin, startHour, startMin)
        );
    }, [selectStatus]);
}

export default useTimeConditons;