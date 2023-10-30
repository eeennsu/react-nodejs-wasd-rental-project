import type { FC } from 'react';
import { useDetailSupplyStore } from '../../../../../../zustand';

type Props = {
    vrData?: VR;
    tabletData?: Tablet;
    lectureRoomData?: LectureRoom;
}

const Tr: FC<Props> = ({ vrData, tabletData, lectureRoomData }) => {

    const { setIsModalOpen, setDetailSupply } = useDetailSupplyStore();

    const handleClick = () => {
        setDetailSupply(vrData || tabletData || lectureRoomData);
        setIsModalOpen(true);
    }

    return (
        <tr className='border-b-[1px] border-b-slate-400 hover:bg-pink-100 cursor-pointer transition-colors' onClick={handleClick}>
            <td>
               {vrData?.SKU || tabletData?.SKU || lectureRoomData?.name} 
            </td>
            <td>
                {vrData?.itemNumber || tabletData?.itemNumber || lectureRoomData?.desc}
            </td>
            <td>
                {
                    (vrData && (vrData.isAvailable ? '사용 가능' : '사용 중')) ?? 
                    (tabletData && (tabletData.isAvailable ? '사용 가능' : '사용 중')) ?? 
                    (lectureRoomData && (lectureRoomData.isAvailable? '사용 가능' : '사용 중'))
                }
            </td>
        </tr>
    );
};

export default Tr;