import type { FC } from 'react';
import { useModalStore, useTabsStore } from '../../../../../../zustand';
import { initModalStep } from '../../../../utils/modal';
import { getLectureRoomAvailability } from '../../../../utils/tables';
import { memo } from 'react';
import TrTemplate from './TrTemplate';

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
        <TrTemplate onClick={handleClick}>
            <td>
                {lectureRoomData.room_name}
            </td>
            <td>
                {lectureRoomData.room_id}
            </td>
            <td>
                {getLectureRoomAvailability(lectureRoomData)}
            </td>
        </TrTemplate>    
    );
};

export default memo(LectureRoomTr);