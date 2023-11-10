import type { FC } from 'react';
import { useModalStore, useTabsStore } from '../../../../../../zustand';
import { getLectureRoomAvailability } from '../../../../utils/tables';
import { memo } from 'react';
import TrTemplate from './TrTemplate';

type Props = {
    lectureRoomData: LectureRoom;
}

const LectureRoomTr: FC<Props> = ({ lectureRoomData }) => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen, setDetailLectureRoom, setSystemStep } = useModalStore();

    const handleClick = () => {
        // initModalStep(activeTab, setSystemStep);

        setSystemStep('LR_DESC');
        setDetailLectureRoom(lectureRoomData);
    }

    return (
        <TrTemplate onClick={handleClick}>
            <td>
                {lectureRoomData.room_name}
            </td>
            <td className='flex gap-1 mx-1'>               
                <span>
                    /
                </span>
                {lectureRoomData.room_id}         
                <span>
                    /
                </span>                   
            </td>
            <td>
                {getLectureRoomAvailability(lectureRoomData)}
            </td>
        </TrTemplate>    
    );
};

export default memo(LectureRoomTr);