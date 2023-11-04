import type { FC } from 'react';
import { useModalStore } from '../../../../../zustand';
import ModalTemplate from '../ModalTemplate';
import Schedule from './Schedule/Schedule';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';

const RentLR: FC = () => {

    const { modalStep } = useModalStore();

    return (
        <ModalTemplate className='flex flex-col gap-7'>
            <Schedule />
            {
                modalStep === 'LR_DESC' ? (
                    <RoomList />
                ) : (
                    <RentalRoomForm />
                )
            }
        </ModalTemplate>
    );
};

export default RentLR;