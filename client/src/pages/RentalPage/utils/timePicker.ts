import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export const getStrDateFormat = (date?: string): string => {
    if (!date) return '';
    
    const _date = dayjs(date, 'YYYYMMDD').toISOString();

    return getDateFormat(_date);
}

export const getDateFormat = (date?: string): string => {
    if (!date) return '';

    const format = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'short' }).format(new Date(date));

    return format;
}

export type RentaledTime = {
    hour: number;
    min: number;
}

export const getHoursFormat = (date?: string): RentaledTime => {
    if (!date) {
        throw new Error('getHoursFormat date undefined.');
    };

    const utcDate = dayjs(date).utc();

    return {
        hour: +utcDate.format('HH'),
        min: +utcDate.format('mm'),
    };
}

export const convertToKoreanTime = (dayjsObj: Dayjs, hour: number, min: number) => {
    const formattedDate = dayjs(dayjsObj.format('YYYY-MM-DD'));

    const combineTime = formattedDate.set('hour', hour).set('minute', min);

    return dayjs.tz(combineTime, 'Asia/Seoul').format();
}

export const getOnlyWeekday = (): Dayjs => {
    const now = dayjs();
    let defaultValue = now;
    
    if (now.day() === 0) { 
        defaultValue = now.add(1, 'day');
    } else if (now.day() === 6) { 
        defaultValue = now.add(2, 'day'); 
    }

    return defaultValue;
}