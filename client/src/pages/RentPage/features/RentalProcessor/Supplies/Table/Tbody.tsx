import type { FC } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

import Tr from './Tr';
import EmptySearchResult from '../../Search/EmptySearchResult';

const Tbody: FC = () => {

    const { activeTab } = useTabsStore();
    const { paginatedDats } = useSuppliesStore();
    const { searchedVRs, searchedTablets, searchedLectureRooms } = useSearchStore();       

    return (
        <tbody>
            {
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
            }                
        </tbody>  
    );
};

export default Tbody;

