import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const getDateFormat = (date?: string): string => {
    if (!date) return '';

    const format = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(date));

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
    }
}