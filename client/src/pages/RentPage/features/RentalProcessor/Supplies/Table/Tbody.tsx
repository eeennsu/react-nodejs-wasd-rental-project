import type { FC } from 'react';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

import Tr from './Tr';
import EmptySearchResult from '../../Search/EmptySearchResult';

const Tbody: FC = ({  }) => {

    const { activeTab } = useTabsStore();
    const { VRsData, tabletsData, lectureRoomsData } = useSuppliesStore();
    const { searchedVRs, searchedTablets, searchedLectureRooms } = useSearchStore();

    return (
        <tbody>
            {
                (activeTab === 0) && (searchedVRs?.length >= 1) ? (
                    searchedVRs.map((vr) => (
                        <Tr key={vr.SKU} vrData={vr} />
                    ))
                ) : (searchedVRs?.length === 0) ? (
                    <EmptySearchResult />
                ) : VRsData?.map((vr) => (
                    <Tr key={vr.SKU} vrData={vr} />
                ))                                     
            }                
            {
                (activeTab === 1) && (searchedTablets?.length >= 1) ? (
                    searchedTablets.map((tablet) => (
                        <Tr key={tablet.SKU} tabletData={tablet} />
                    ))
                ) : (searchedTablets?.length === 0) ? (
                    <EmptySearchResult />
                ) : tabletsData?.map((tablet) => (
                    <Tr key={tablet.SKU} tabletData={tablet} />
                ))
            }
            {
                (activeTab === 2) && (searchedLectureRooms?.length >= 1) ? (
                    searchedLectureRooms.map((room) => (
                        <Tr key={room.name} lectureRoomData={room} />
                    ))
                ) : (searchedLectureRooms?.length === 0) ? (
                    <EmptySearchResult />
                ) : lectureRoomsData?.map((room) => (
                    <Tr key={room.name} lectureRoomData={room} />
                ))
            }
        </tbody>
    );
};

export default Tbody;