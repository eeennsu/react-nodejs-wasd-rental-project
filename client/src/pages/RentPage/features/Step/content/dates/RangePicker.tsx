import type { FC } from 'react';
import type { Dayjs } from 'dayjs';
import { DatePicker } from 'antd';
import { useStepStore } from '../../../../../../zustand';
import { disabledDate, rangePresets } from '../../../../utils/rangePicker';

const { RangePicker: AntdRangePicker } = DatePicker;

const RangePicker: FC = () => {

    const { setRentDate, setReturnDate } = useStepStore();

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
            format={'MM-DD  dddd'}
            className='w-[464px] border rounded-none border-01 bg-04'
        />
    );
};

export default RangePicker;