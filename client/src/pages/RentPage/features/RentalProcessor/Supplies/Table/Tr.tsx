import type { FC } from 'react';
import { useDetailModalStore, useTabsStore } from '../../../../../../zustand';
import { getSuppliesAvailability } from '../../../../utils/tables';

type Props = {
    vrData?: VR;
    tabletData?: Tablet;
    lectureRoomData?: LectureRoom;
}

const Tr: FC<Props> = ({ vrData, tabletData, lectureRoomData }) => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen, setDetailSupply, setModalStep } = useDetailModalStore();

    const handleClick = () => {
        setDetailSupply(vrData || tabletData || lectureRoomData);
        activeTab === 2 && setModalStep('LR_DESC');
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
                    getSuppliesAvailability(vrData || tabletData || lectureRoomData)       
                }
            </td>
        </tr>
    );
};

export default Tr;