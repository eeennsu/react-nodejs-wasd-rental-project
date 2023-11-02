import type { FC } from 'react';
import { useModalStore } from '../../../../../zustand';
import ModalTemplate from '../ModalTemplate';
import Schedule from './Schedule/Schedule';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';

const RentLR: FC = () => {

    const { modalStep } = useModalStore();

    return (
        <ModalTemplate>
            <Schedule />
            <div className='mt-6'>
                {
                    modalStep === 'LR_DESC' ? (
                        <RoomList />
                    ) : (
                        <RentalRoomForm />
                    )
                }
            </div>
        </ModalTemplate>
    );
};

export default RentLR;

// testes