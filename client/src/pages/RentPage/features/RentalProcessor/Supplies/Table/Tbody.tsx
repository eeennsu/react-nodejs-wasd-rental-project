import type { FC } from 'react';
import { getPropsTables } from '../../../../utils/tables';
import { useSearchStore, useSuppliesStore, useTabsStore } from '../../../../../../zustand';

import Tr from './Tr';
import EmptySearchResult from '../../Search/EmptySearchResult';

const Tbody: FC = () => {

    const { activeTab } = useTabsStore();
    const { paginatedDatas } = useSuppliesStore();
    const { searchedVRs, searchedTablets, searchedLectureRooms } = useSearchStore();       

    let items: Array<VR | Tablet | LectureRoom>;
    let keyField: string;

    if (activeTab === 0) {
        items = searchedVRs ?? (paginatedDatas as VR[]);
        keyField = 'SKU';
    } else if (activeTab === 1) {
        items = searchedTablets ?? (paginatedDatas as Tablet[]);
        keyField = 'SKU';
    } else if (activeTab === 2) {
        items = searchedLectureRooms ?? (paginatedDatas as LectureRoom[]);
        keyField = 'name';
    }

    return (
        <tbody>
            {/* prev_code {
                (activeTab === 0) ? (
                    searchedVRs?.length >= 1 ? (
                        searchedVRs.map((vr) => (
                            <Tr key={vr.SKU} vrData={vr} />
                        ))
                    ) : (searchedVRs?.length === 0) ? (
                        <EmptySearchResult />
                    ) : (
                        (paginatedDatas as VR[]).map((vr) => (
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
                        (paginatedDatas as Tablet[]).map(((tablet) => (
                            <Tr key={tablet.SKU} tabletData={tablet} />
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
                        (paginatedDatas as LectureRoom[]).map((room) => (
                            <Tr key={room.name} lectureRoomData={room} />
                        ))
                    )
                ) : null 
            }                 */}
            {
                items?.length >= 1 ? (
                    items.map((item) => (
                        <Tr key={item[keyField]} {...getPropsTables(activeTab, item)} />
                    ))
                ) : (
                    <EmptySearchResult />
                )
            }
        </tbody>  
    );
};

export default Tbody;

