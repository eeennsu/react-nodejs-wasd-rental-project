import type { FC } from 'react';
import { classRoom } from '../../../../constants';
import { useEffect } from 'react';
import { notification } from 'antd';
import RoomButton from './SelectRoomButton';

const RoomList: FC = () => {

    const { enginerringBuilding, room_mainBuilding } = classRoom;

    useEffect(() => {
        notification.info({
            message: 'Notification',
            description: '이곳에서 강의실을 먼저 선택해 주세요!',
            placement: 'topRight',
            duration: 3
        })
    }, []);

    return (
        <section className='flex flex-col items-center justify-center w-full py-[34px] md:py-[56px]'>
            <div className='grid w-10/12 grid-cols-4 sm:grid-cols-4 h-3/5 bg-04'>
                {
                    enginerringBuilding.map((room) => (
                        <RoomButton key={room} room={room} />
                    ))
                }
                {
                    room_mainBuilding.map((room) => (
                        <RoomButton key={room} room={room} />
                    ))
                }
            </div>
        </section>
    );
};

export default RoomList;