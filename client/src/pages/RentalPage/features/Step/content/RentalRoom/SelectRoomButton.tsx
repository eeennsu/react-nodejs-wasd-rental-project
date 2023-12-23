import type { FC } from 'react';
import { useStepStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';

type Props = {
    room: ClassRoomName;
}

const RoomButton: FC<Props> = ({ room }) => {

    const { selectedRoom, setSelectedRoom } = useStepStore(state => ({
        selectedRoom: state.selectedRoom, setSelectedRoom: state.setSelectedRoom
    }), shallow);

    const [building, roomNumber] = room.split(' ');
    const handleRentStep = () => {
        setSelectedRoom(room === selectedRoom ? null : room);
    }

    return (
        <button className={`w-full h-28 font-semibold border cursor-pointer text-sm md:text-base border-01 hover:bg-slate-200 ${selectedRoom === room && 'border-4'}`} onClick={handleRentStep}>
            {building}
            <br />
            {roomNumber}
        </button>
    );
}

export default RoomButton;