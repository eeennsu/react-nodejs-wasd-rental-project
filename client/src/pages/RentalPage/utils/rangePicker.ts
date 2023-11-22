import { RangePickerProps, DatePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';

const now = dayjs();

export const rangePresets: RangePickerProps['presets'] = [
    { label: '1 week', value: [now, now.add(1, 'w')] },
    { label: '2 week', value: [now, now.add(2, 'w')] },
    { label: '3 week', value: [now, now.add(3, 'w')] },
    { label: '4 week', value: [now, now.add(4, 'w')] },
];

export const disabledDate: RangePickerProps['disabledDate'] | DatePickerProps['disabledDate'] = (cur) => {
    return cur && (cur < now.endOf('d') || cur.day() === 0 || cur.day() === 6);
}