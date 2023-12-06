import type { FC } from 'react';
import { classRoom } from '../../../../constants';
import { useEffect } from 'react';
import RoomButton from './SelectRoomButton';
import { message } from 'antd';

const RoomList: FC = () => {

    const { enginerringBuilding, room_mainBuilding } = classRoom;

    useEffect(() => {
        message.config({

        })
    }, []);

    return (
        <section className='flex flex-col items-center justify-center w-full py-[56px] text-center'>
            <table className='w-10/12 border-collapse h-3/5 bg-04'>
                <tbody>
                    <tr>
                        {
                            enginerringBuilding.map((room) => (
                                <RoomButton key={room} room={room} />
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            room_mainBuilding.map((room) => (
                                <RoomButton key={room} room={room} />
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default RoomList;