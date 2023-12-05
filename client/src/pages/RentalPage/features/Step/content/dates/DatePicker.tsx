import type { FC } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePicker as AntdDatePicker } from 'antd';
import { useTimeStore } from '../../../../../../zustand';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';

type Props = {
    type: 'range' | 'date'
}

const { RangePicker } = AntdDatePicker;

const DatePicker: FC<Props> = ({ type }) => {

    const { setRentDate, setReturnDate } = useTimeStore();

    const handleDateChange = (date: null | Dayjs, dateString: string) => {
        if (date) {
            setRentDate(new Date(dateString));
        }
         
        else {
            setRentDate(null);
        }
    }

    const handleRangeChange = (dates: null | Array<Dayjs | null>, dateStrings: string[]) => {
        if (dates) {         
            setRentDate(new Date(dateStrings[0]));
            setReturnDate(new Date(dateStrings[1]));
        } else {
            setRentDate(null);
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
            <RangePicker 
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