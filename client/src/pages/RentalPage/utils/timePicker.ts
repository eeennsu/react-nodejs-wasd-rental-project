export const getDateFormat = (date?: string): string => {
    if (!date) return '';

    const format = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(date));

    return format;
}

export type RentaledTime = {
    hour: string;
    min: string;
}

export const getHoursFormat = (date?: string): RentaledTime => {
    let rentaledHours: RentaledTime  = {
        hour: '',
        min: ''
    }

    if (!date) return rentaledHours;

    const format = new Intl.DateTimeFormat('ko-kR', { hour: 'numeric', hour12: false, minute: 'numeric' }).formatToParts();

    format.map((item) => {
        if (item.type === 'hour') {
            rentaledHours = {
                ...rentaledHours, 
                hour: item.value
            };
        } else if (item.type === 'minute') { 
            rentaledHours = {
                ...rentaledHours,
                min: item.value
            };
        }
    });

    return rentaledHours;
}