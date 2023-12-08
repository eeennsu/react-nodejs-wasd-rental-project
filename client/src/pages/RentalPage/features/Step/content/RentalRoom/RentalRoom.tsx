import type { FC } from 'react';
import { useState } from 'react';
import { useStepStore } from '../../../../../../zustand';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';
import Template from '../../templates/Template';
import DescRoomButtons from './DescRoomStepButtons';
import RentalRoomStepButtons from './RentalRoomStepButtons';
import Image from 'antd/es/image/index';
import timetable from '../../../../../../assets/images/timetable.png';
import Button from '../../../../../../components/Button';

const RentalRoom: FC = () => {

    const systemStep  = useStepStore(state => state.systemStep);
    const [visible, setVisible] = useState<boolean>(false);

    const onVisibleChange = (visible: boolean) => {
        setVisible(visible);
    }

    const handleVisibleChange = () => {
        setVisible(prev => !prev);
    }

    return (
        <Template className='h-full mb-5 3xl:mb-0'>         
            <div className='relative'>
                <div className='absolute z-10 flex items-center justify-center w-full h-full transition-colors duration-300 cursor-pointer bg-black/50 group hover:bg-black/60 hover:shadow-sm' onClick={handleVisibleChange}>
                    <span className='text-xl font-bold tracking-wider text-white'>
                        시간표 보기
                    </span>
                </div>
                <Image 
                    src={timetable} 
                    alt='시간표 이미지' 
                    className='blur-sm'
                    height={260} 
                    preview={{
                        visible,
                        src: timetable,
                        onVisibleChange
                    }} 
                />             
            </div>   
            <div className='h-[360px]'>
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