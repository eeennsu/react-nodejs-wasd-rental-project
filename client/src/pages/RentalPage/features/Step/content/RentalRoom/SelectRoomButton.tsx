import type { FC } from 'react';
import { useStepStore } from '../../../../../../zustand';

type Props = {
    room: string
}

const RoomButton: FC<Props> = ({ room }) => {

    const { selectedRoom, setSelectedRoom } = useStepStore();

    const [building, roomNumber] = room.split(' ');
    const handleRentStep = () => {
        setSelectedRoom(room === selectedRoom ? null : room);
    }

    return (
        <td key={room} className={`w-1/4 h-28 font-semibold border cursor-pointer border-01 hover:bg-slate-200 ${selectedRoom === room && 'border-2'}`} onClick={handleRentStep}>
            {building}
            <br />
            {roomNumber}
        </td>
    );
};

export default RoomButton;