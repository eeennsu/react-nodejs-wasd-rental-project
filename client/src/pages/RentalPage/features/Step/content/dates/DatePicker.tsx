import type { FC } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePicker as AntdDatePicker } from 'antd';
import { useTimeStore } from '../../../../../../zustand';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';
import { shallow } from 'zustand/shallow';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);			
dayjs.locale('ko');

type Props = {
    type: 'range' | 'date'
}

const AntdRangePicker = AntdDatePicker.RangePicker;

const DatePicker: FC<Props> = ({ type }) => {

    const { rentalDate, setRentalDate, setReturnDate } = useTimeStore(state => ({
        rentalDate: state.rentalDate,
        setRentalDate: state.setRentalDate,
        setReturnDate: state.setReturnDate
    }), shallow);

    const handleDateChange = (dayjsDate: null | Dayjs, dateString: string) => {
        if (dayjsDate) {
            const year = dayjsDate.year();
            const month = dayjsDate.month() + 1;
            const date = dayjsDate.date();
            
            const _rentalDate = dayjs(`${year}-${month}-${date}`);
            console.log('_rentalDate', _rentalDate);
            setRentalDate(_rentalDate);
        } else {
            setRentalDate(null);
        }
    }

    const handleRangeChange = (dayjsDate: null | Array<Dayjs | null>, dateStrings: string[]) => {
        if (Array.isArray(dayjsDate) && dayjsDate.length >= 1 && dayjsDate[0] && dayjsDate[1]) {     
            const yearRental = dayjsDate[0].year();
            const monthRental = dayjsDate[0].month() + 1;
            const dateRental = dayjsDate[0].date();
        
            const yearReturn = dayjsDate[1].year();
            const monthReturn = dayjsDate[1].month() + 1;
            const dateReturn = dayjsDate[1].date();

            const _rentalDate = dayjs(`${yearRental}-${monthRental}-${dateRental}`);
            const _returnDate = dayjs(`${yearReturn}-${monthReturn}-${dateReturn}`);

            setRentalDate(_rentalDate);
            setReturnDate(_returnDate);  
        } else {
            setRentalDate(null);
            setReturnDate(null);  
        }
    }

    if (type === 'date') {
        return (
            <AntdDatePicker 
                onChange={handleDateChange}
                disabledDate={disabledDate}
                placeholder='대여 날짜를 선택해 주세요'
                format='MM-DD / ddd'
                className='w-[260px] border rounded-none border-01 bg-04 p-0'
            />  
        );
    }

    else {
        return (
            <AntdRangePicker 
                presets={rangePresets}
                disabledDate={disabledDate} 
                onChange={handleRangeChange}          
                placeholder={['대여 날짜를 선택해 주세요', '반납날짜를 선택해 주세요']}
                format='MM-DD / ddd'
                className='w-[464px] border rounded-none border-01 bg-04'
            />
        );
    }
};

export default DatePicker;