import type { FC } from 'react';
import { useModalStore } from '../../../../../../zustand';
import Schedule from '../dates/Schedule';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';
import Template from '../../templates/Template';
import DescRoomButtons from './DescRoomButtons';
import RentRoomButtons from './RentRoomButtons';

const RentRoom: FC = () => {

    const { systemStep } = useModalStore();

    return (
        <Template className='h-full '>
            <Schedule />
            {
                systemStep === 'LR_DESC' ? (
                    <RoomList />
                ) : systemStep === 'LR_RENT' ? (
                    <RentalRoomForm />
                ) : null
            }
            {
                systemStep === 'LR_DESC' ? (
                    <DescRoomButtons />
                ) : systemStep === 'LR_RENT' ? (
                    <RentRoomButtons />
                ) : null
            }
        </Template>
    );
};

export default RentRoom;