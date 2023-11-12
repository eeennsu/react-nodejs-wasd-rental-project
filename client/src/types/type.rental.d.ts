interface Retal {
    rental_id: number;
    rental_date: Date;
    rental_due_date: Date;
    rental_state: string;
}

type RoomStatus = 'DISABLED' | 'SELECTABLE';
type SelectStatus = 'NONE' | 'FIRST_SELECT' | 'LAST_SELECT';