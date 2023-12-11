import type { FC } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePicker as AntdDatePicker } from 'antd';
import { useTimeStore } from '../../../../../../zustand';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';
import { shallow } from 'zustand/shallow';
import { getOnlyWeekday } from '../../../../utils/timePicker';

type Props = {
    type: 'range' | 'date'
}

const AntdRangePicker = AntdDatePicker.RangePicker;

const DatePicker: FC<Props> = ({ type }) => {

    const { setRentalDate, setReturnDate } = useTimeStore(state => ({
        setRentalDate: state.setRentalDate,
        setReturnDate: state.setReturnDate
    }), shallow);

    const handleDateChange = (dayjsDate: null | Dayjs, dateString: string) => {
        if (dayjsDate) {
            setRentalDate(dayjsDate);
            setReturnDate(dayjsDate);
        } else {
            setRentalDate(null);
            setReturnDate(null);
        }
    }

    const handleRangeChange = (dayjsDates: null | Array<Dayjs | null>, dateStrings: string[]) => {
        if (Array.isArray(dayjsDates) && dayjsDates[0] && dayjsDates[1]) {     
            setRentalDate(dayjsDates[0]);
            setReturnDate(dayjsDates[1]);  
        } else {
            setRentalDate(null);
            setReturnDate(null);  
        }
    }

    if (type === 'date') {
        return (
            <AntdDatePicker 
                defaultValue={getOnlyWeekday()}
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
                className='w-[464px] border rounded-none border-01 bg-04 '
            />
        );
    }
};

export default DatePicker;