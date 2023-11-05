import type { FC } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

import EmptySearchResult from '../../Search/EmptySearchResult';
import ToolTr from './ToolTr';
import LectureRoomTr from './LectureRoomTr';

const Tbody: FC = () => {

    const { activeTab } = useTabsStore();
    const { VRsData, tabletsData, lectureRoomsData } = useSuppliesStore();
    // const { searchedVRs, searchedTablets, searchedLectureRooms } = useSearchStore();       
   
    return (
        <tbody className='flex flex-col gap-2.5'>
            {/* 분리 검색은 보류 {
                (activeTab === 0) ? (
                    searchedVRs?.length >= 1 ? (
                        searchedVRs.map((vr) => (
                            <Tr key={vr.SKU} vrData={vr} />
                        ))
                    ) : (searchedVRs?.length === 0) ? (
                        <EmptySearchResult />
                    ) : (
                        (paginatedDats as VR[]).map((vr) => (
                            <Tr key={vr.SKU} vrData={vr} />
                        ))
                    )
                ) : (activeTab === 1) ? (
                    searchedTablets?.length >= 1 ? (
                        searchedTablets.map((tablet) => (
                            <Tr key={tablet.SKU} tabletData={tablet} />
                        ))
                    ) : (searchedTablets?.length === 0) ? (
                        <EmptySearchResult />
                    ) : (
                        (paginatedDats as Tablet[]).map(((tablet) => (
                            <Tr key={tablet.SKU} vrData={tablet} />
                        )))
                    )
                ) : (activeTab === 2) ? (
                    searchedLectureRooms?.length >= 1 ? (
                        searchedLectureRooms.map((room) => (
                            <Tr key={room.name} lectureRoomData={room} />
                        ))
                    ) : (searchedLectureRooms?.length === 0) ? (
                        <EmptySearchResult />
                    ) : (
                        (paginatedDats as LectureRoom[]).map((room) => (
                            <Tr key={room.name} lectureRoomData={room} />
                        ))
                    )
                ) : null 
            }                 */}
            {
                (activeTab === 0) ? (
                    null
                ) : (activeTab === 1) ? (
                    (VRsData).map((vr) => (
                        <ToolTr key={vr.tool_id} toolData={vr} />
                    ))
                ) : (activeTab === 2) ? (
                    (tabletsData).map((tablet) => (
                        <ToolTr key={tablet.tool_id} toolData={tablet} />
                    ))
                ) : (activeTab === 3) ? (
                    (lectureRoomsData).map((room) => (
                        <LectureRoomTr key={room.room_id} lectureRoomData={room} />
                    ))
                ) : null        
            }
        </tbody>  
    );
};

export default Tbody;

