import type { FC } from 'react';
import { useStepStore } from '../../../../../../zustand';
import Schedule from '../dates/Schedule';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';
import Template from '../../templates/Template';
import DescRoomButtons from './DescRoomStepButtons';
import RentalRoomStepButtons from './RentalRoomStepButtons';

const RentalRoom: FC = () => {

    const systemStep  = useStepStore(state => state.systemStep);

    return (
        <Template className='h-full mb-5 3xl:mb-0'>
            <Schedule />
            <div className='h-[348px]'>
                {
                    systemStep === 'CLASSROOM_DESC' ? (
                        <RoomList />
                    ) : systemStep === 'CLASSROOM_RENT' ? (
                        <RentalRoomForm />
                    ) : null
                }   
            </div>      
            {
                systemStep === 'CLASSROOM_DESC' ? (
                    <DescRoomButtons />
                ) : systemStep === 'CLASSROOM_RENT' ? (
                    <RentalRoomStepButtons />
                ) : null
            }                          
        </Template>
    );
};

export default RentalRoom;