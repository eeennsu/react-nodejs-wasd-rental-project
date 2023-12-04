import type { FC } from 'react';
import { useSearchStore, useTabsStore, useToolStore } from '../../../../../../zustand';
import EmptySearchResult from '../../Search/EmptySearchResult';
import AllDatas from './datasByTab/AllDatas';
import VRDatas from './datasByTab/VRDatas';
import TabletDatas from './datasByTab/TabletDatas';
import ClassRoomDatas from './datasByTab/ClassRoomDatas';
import SearchedDatas from './datasByTab/SearchedDatas';

const Datas: FC = () => {
    
    const activeTab = useTabsStore(state => state.activeTab);
    const searchedResults = useSearchStore(state => state.searchedResults);

    return (
        <ul className='flex flex-col gap-[11px] h-full w-full flex-1'>
            {
                searchedResults ? (
                    <SearchedDatas results={searchedResults} />
                ) : (
                    (activeTab === 0) ? (
                        <AllDatas />
                    ) : (activeTab === 1) ? (
                        <VRDatas />
                    ) : (activeTab === 2) ? (
                        <TabletDatas />
                    ) : (activeTab === 3) ? (
                        <ClassRoomDatas />
                    ) : null
                )                
            }
        </ul>    
    );
};

export default Datas;