import type { FC } from 'react';
import { useStepStore } from '../../../../../../zustand';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';
import Template from '../../templates/Template';
import DescRoomButtons from './DescRoomStepButtons';
import RentalRoomStepButtons from './RentalRoomStepButtons';
import Image from 'antd/es/image/index';
import timetable from '../../../../../../assets/images/timetable.png';

const RentalRoom: FC = () => {

    const systemStep  = useStepStore(state => state.systemStep);

    return (
        <Template className='h-full mb-5 3xl:mb-0'>         
            <Image src={timetable} alt='시간표 이미지' height={280} />            
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