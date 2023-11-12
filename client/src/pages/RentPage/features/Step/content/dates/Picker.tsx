import type { FC } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';
import { useStepStore } from '../../../../../../zustand';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';

type Props = {
    type: 'range' | 'date'
}

const { RangePicker } = DatePicker;

const Picker: FC<Props> = ({ type }) => {

    const { setRentDate, setReturnDate } = useStepStore();

    const handleDateChange = (date: null | Dayjs, dateString: string) => {
        if (date) {
            console.log(date);
            console.log(dateString);
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
            <DatePicker 
                onChange={handleDateChange}
                disabledDate={disabledDate}
                placeholder='대여 날짜를 선택해 주세요'
                format='MM-DD  dddd'
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
                format='MM-DD  dddd'
                className='w-[464px] border rounded-none border-01 bg-04'
            />
        );
    }
};

export default Picker;