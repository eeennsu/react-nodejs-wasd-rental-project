import type { FC } from 'react';
import { useModalStore } from '../../../../../zustand';
import { classRoom } from '../../../constants';


const RoomList: FC = () => {

    const { 
        setSystemStep, setSelectedRoom
    } = useModalStore();

    const handleRentStep = (roomName: string) => {
        setSelectedRoom(roomName);
        setSystemStep('LR_RENT');
    }

    const topButtons = classRoom.enginerringBuilding.map((room) => {

        const [building, roomNumber] = room.split(' ');
        const handleRentStep = () => {
            setSelectedRoom(room);
            setSystemStep('LR_RENT');
        }

        return (
            <button key={room} className='w-full py-1 mx-2 bg-green-200 hover:bg-green-300' onClick={handleRentStep}>
                {building}
                    <br />
                {roomNumber}
            </button>
        )
    });

    const bottomButtons = classRoom.room_mainBuilding.map((room) => (
        <button key={room} className='w-full px-2 py-3 mx-2 bg-green-200 hover:bg-green-300' onClick={() => handleRentStep(room)}>
            {room}
        </button>
    ));

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h3 className='text-lg'>강의실 목록</h3>
            <div className='flex flex-col gap-4 mt-4 text-center'>
                <div className='flex justify-between '>
                    {topButtons}                                  
                </div>
                <div className='flex justify-between'>
                    {bottomButtons}
                </div>
            </div>
        </div>
    );
};

export default RoomList;