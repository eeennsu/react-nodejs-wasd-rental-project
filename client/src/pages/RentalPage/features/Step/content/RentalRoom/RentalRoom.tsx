import type { FC } from 'react';
import { useState } from 'react';
import { useStepStore } from '../../../../../../zustand';
import { motion } from 'framer-motion';
import RoomList from './RoomList';
import RentalRoomForm from './RentalRoomForm';
import Template from '../../templates/Template';
import DescRoomButtons from './DescRoomStepButtons';
import RentalRoomStepButtons from './RentalRoomStepButtons';
import Image from 'antd/es/image/index';
import timetable from '../../../../../../assets/images/timetable.png';

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
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Template className='h-full mb-5 3xl:mb-0 max-md:mt-0 max-3xl:mt-10'>         
                <div className='relative mx-9 md:mx-0 max-md:mt-4'>
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
                <div className='h-full md:h-[360px]'>
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
        </motion.div>
    );
}

export default RentalRoom;