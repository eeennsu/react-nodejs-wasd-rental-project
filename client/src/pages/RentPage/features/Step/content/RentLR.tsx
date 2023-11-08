import type { FC } from 'react';
import { useModalStore } from '../../../../../zustand';
import Schedule from './schedule/Schedule';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';

const RentLR: FC = () => {

    const { systemStep } = useModalStore();

    return (
        <section className='flex flex-col gap-7'>
            <Schedule />
            {
                systemStep === 'LR_DESC' ? (
                    <RoomList />
                ) : (
                    <RentalRoomForm />
                )
            }
        </section>
    );
};

export default RentLR;