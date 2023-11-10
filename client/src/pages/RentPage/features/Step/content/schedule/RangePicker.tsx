import type { FC } from 'react';
import { DatePicker } from 'antd';
import { useMemo } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { useModalStore } from '../../../../../../zustand';
import { RangePickerProps } from 'antd/es/date-picker';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';
import RangePickerIcon from './RangePickerIcon';

const { RangePicker: AntdRangePicker } = DatePicker;

const RangePicker: FC = () => {

    const now = dayjs();
    const { 
        rentDate, setRentDate, 
        returnDate, setReturnDate 
    } = useModalStore();

    const handleRangeChange = (dates: null | Array<Dayjs | null>, dateStrings: string[]) => {
        if (dates) {         
            setRentDate(new Date(dateStrings[0]));
            setReturnDate(new Date(dateStrings[1]));
        } else {
            setRentDate(null);
            setReturnDate(null);
        }
    }

    return (
        <AntdRangePicker 
            presets={rangePresets}
            disabledDate={disabledDate} 
            onChange={handleRangeChange}          
            placeholder={['대여 날짜를 선택해 주세요', '반납날짜를 선택해 주세요']}
            format={'YY-MM-DD / ddd'}
            className='w-[504px] border rounded-none border-01 bg-04'
        />
    );
};

export default RangePicker;