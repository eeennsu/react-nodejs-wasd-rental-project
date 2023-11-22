import { devtools } from 'zustand/middleware';
import { ITimeStore } from './types';
import { createWithEqualityFn } from 'zustand/traditional';

const useTimeStore = createWithEqualityFn<ITimeStore>()(
    devtools(
        (set) => ({   
            rentDate: null,
            setRentDate: (date) => set(() => ({ rentDate: date }), false, 'SET_RENT_DATE'),

            returnDate: null,
            setReturnDate: (date) => set(() => ({ returnDate: date }), false, 'SET_RETURN_DATE'),

            roomStatus: 'SELECTABLE',
            setRoomStatus: (roomStatus) => set(() => ({ roomStatus }), false, 'SET_ROOM_STATUS'),

            selectStatus: 'NONE',
            setSelectStatus: (selectStatus: SelectStatus) => set(() => ({ selectStatus }), false, 'SET_SELECT_STATUS'),           
            
            firstSelectHour: null,
            firstSelectMin: null,
            lastSelectHour: null,
            lastSelectMin: null,
            
            setFirstSelectHour: (firstHour: number) => set((prev) => ({ firstSelectHour: firstHour }), false, 'SET_FIRST_SELECT_HOUR'),
            setFirstSelectMin: (firstMin: number) => set(() => ({ firstSelectMin: firstMin }), false, 'SET_FIRST_SELECT_MIN'),
            setLastSelectHour: (lastHour: number) => set(() => ({ lastSelectHour: lastHour }), false, 'SET_LAST_SELECT_HOUR'),
            setLastSelectMin: (lastMin: number) => set(() => ({ lastSelectMin: lastMin }), false, 'SET_LAST_SELECT_MIN'),
        
            resetTimes: () => set(() => ({ 
                selectStatus: 'NONE',
                firstSelectHour: null,
                firstSelectMin: null,
                lastSelectHour: null,
                lastSelectMin: null,
            }), false, 'RESET_TIMES'),

            timeBtnsResetTrigger: false,
            setTimeBtnsResetTrigger: () => set((prev) => ({ timeBtnsResetTrigger: !prev.timeBtnsResetTrigger }), false, 'SET_TIME_BTNS_RESET_TRIGGER'),
        }),
    )
);

export default useTimeStore;