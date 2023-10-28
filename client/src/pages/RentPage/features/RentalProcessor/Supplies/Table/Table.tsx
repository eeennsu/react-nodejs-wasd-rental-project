import type { FC } from 'react';
import { useEffect } from 'react';
import { tabletDummies, vrDummies, lecetureRoomDummies } from '../../../../constants/dummy';
import useTabsStore from '../../../../../../zustand/tabsStore/useTabsStore';
import useSuppliesStore from '../../../../../../zustand/suppliesStore/useSuppliesStore';
import Tr from './Tr';
import { useSearchStore } from '../../../../../../zustand';
import EmptySearchResult from '../../Search/EmptySearchResult';
import Thead from './Thead';
import Tbody from './Tbody';


const Table: FC = () => {

    const { activeTab } = useTabsStore();

    const { setVRsData, setTabletsData, setLectureRoomsData, deleteAllDatas } = useSuppliesStore();

    const { searchTerm, searchedVRs, searchedTablets, searchedLectureRooms } = useSearchStore();

    useEffect(() => {
        deleteAllDatas();

        if (searchTerm.length === 0) {
            switch(activeTab) {            
                case 0: 
                    // 여긴 비동기 호출로 전환 예정
                    setVRsData?.(vrDummies);
                    break;
    
                case 1:
                    // 여긴 비동기 호출로 전환 예정
                    setTabletsData(tabletDummies);
                    break;
    
                case 2: 
                    // 여긴 비동기 호출로 전환 예정
                    setLectureRoomsData(lecetureRoomDummies);
                    break;
                
                default:
                    setVRsData(vrDummies);
                    break;            
            }
        }
     
    }, [activeTab, deleteAllDatas, setVRsData, setTabletsData, setLectureRoomsData]);

    return (
        <table className='w-full h-full text-center border-collapse table-auto table-sm'>
            <Thead />
            <Tbody />            
        </table>
    );
};

export default Table;