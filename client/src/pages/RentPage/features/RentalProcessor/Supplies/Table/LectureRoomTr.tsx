import type { FC } from 'react';
import { useModalStore, useTabsStore } from '../../../../../../zustand';
import { initModalStep } from '../../../../utils/modal';
import { getLectureRoomAvailability } from '../../../../utils/tables';

type Props = {
    lectureRoomData: LectureRoom;
}

const LectureRoomTr: FC<Props> = ({ lectureRoomData }) => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen, setDetailLectureRoom, setModalStep } = useModalStore();

    const handleClick = () => {
        initModalStep(activeTab, setModalStep);

        setDetailLectureRoom(lectureRoomData);

        setIsModalOpen(true);
    }

    return (
        <tr className='border-b-[1px] border-b-slate-400 hover:bg-pink-100 transition-colors cursor-pointer' onClick={handleClick}>
            <td>
                {lectureRoomData.room_name}
            </td>
            <td>
                {lectureRoomData.room_id}
            </td>
            <td>
                {getLectureRoomAvailability(lectureRoomData)}
            </td>
        </tr>
    );
};

export default LectureRoomTr;