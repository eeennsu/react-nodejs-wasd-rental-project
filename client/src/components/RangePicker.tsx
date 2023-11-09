import type { FC } from 'react';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { useMemo } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { useModalStore } from '../zustand';

const { RangePicker: AntdRangePicker } = DatePicker;

const RangePicker: FC = () => {

    const now = dayjs();
    const { setReturnDate } = useModalStore();
    
    const rangePresets: TimeRangePickerProps['presets'] = useMemo(() => [
        { label: '1주', value: [now, now.add(1, 'w')] },
        { label: '2주', value: [now, now.add(2, 'w')] },
        { label: '3주', value: [now, now.add(3, 'w')] },
        { label: '4주', value: [now, now.add(4, 'w')] },
    ], [now]);

    const handleRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
        if (dates) {         
            setReturnDate(new Date(dateStrings[1]));
        } else {
            setReturnDate(null);
        }
    }

    return (
        <AntdRangePicker 
            presets={rangePresets} 
            onChange={handleRangeChange}
            defaultValue={[now, now.add(1, 'w')]} 
        />
    );
};

export default RangePicker;