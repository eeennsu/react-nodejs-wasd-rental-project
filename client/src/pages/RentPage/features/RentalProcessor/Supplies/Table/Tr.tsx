import type { FC } from 'react';

type Props = {
    vrData?: VR;
    tabletData?: Tablet;
    lectureRoomData?: LectureRoom;
}

const Tr: FC<Props> = ({ vrData, tabletData, lectureRoomData }) => {

    return (
        <tr className='border-b-[1px] border-b-slate-400'>
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