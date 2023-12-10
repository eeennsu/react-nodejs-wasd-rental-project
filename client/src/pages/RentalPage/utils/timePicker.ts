import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

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

// export const getFullDate = (dayjsDate: Dayjs): Dayjs => {
//     const year = dayjsDate.year();
//     const month = dayjsDate.month() + 1;
//     const date = dayjsDate.date();
//     dayjsDate.format('yyyy-MM-dd');
//     return dayjs(`${year}-${month}-${date}`);
// }

export const convertToKoreanTime = (dayjsObj: Dayjs, hour: number, min: number) => {
    const formattedDate = dayjs(dayjsObj.format('YYYY-MM-DD'));

    const combineTime = formattedDate.set('hour', hour).set('minute', min);

    // return combineTime.utc().tz('Asia/Seoul').format();
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
    return defaultValue;
}