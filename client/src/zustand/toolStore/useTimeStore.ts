import type { ITimeStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { getOnlyWeekday } from '../../pages/RentalPage/utils/timePicker';

const useTimeStore = createWithEqualityFn<ITimeStore>()(
    devtools(
        (set) => ({   
            rentalDate: getOnlyWeekday(),
            setRentalDate: (rentalDate) => set(() => ({ rentalDate }), false, 'SET_RENTAL_DATE'),

            returnDate: getOnlyWeekday(),
            setReturnDate: (returnDate) => set(() => ({ returnDate }), false, 'SET_RETURN_DATE'),

            roomStatus: 'SELECTABLE',
            setRoomStatus: (roomStatus) => set(() => ({ roomStatus }), false, 'SET_ROOM_STATUS'),

            selectStatus: 'NONE',
            setSelectStatus: (selectStatus: SelectStatus) => set(() => ({ selectStatus }), false, 'SET_SELECT_STATUS'),           
            
            firstSelectHour: null,
            firstSelectMin: null,
            lastSelectHour: null,
            lastSelectMin: null,
            
            setFirstSelectHour: (firstSelectHour) => set(() => ({ firstSelectHour }), false, 'SET_FIRST_SELECT_HOUR'),
            setFirstSelectMin: (firstSelectMin) => set(() => ({ firstSelectMin }), false, 'SET_FIRST_SELECT_MIN'),
            setLastSelectHour: (lastSelectHour) => set(() => ({ lastSelectHour }), false, 'SET_LAST_SELECT_HOUR'),
            setLastSelectMin: (lastSelectMin) => set(() => ({ lastSelectMin }), false, 'SET_LAST_SELECT_MIN'),
        
            resetTimes: () => set(() => ({ 
                selectStatus: 'NONE',
                firstSelectHour: null,
                firstSelectMin: null,
                lastSelectHour: null,
                lastSelectMin: null,
            }), false, 'RESET_TIMES'),

            timeBtnsResetTrigger: false,
            setTimeBtnsResetTrigger: () => set((prev) => ({ timeBtnsResetTrigger: !prev.timeBtnsResetTrigger }), false, 'SET_TIME_BTNS_RESET_TRIGGER'),

            closestRentaledTime: null,
            setClosestRentaledTime: (closestRentaledTime) => set(() => ({ closestRentaledTime }), false, 'SET_CLOSEST_TIME')
        }),
    )
);

export default useTimeStore;