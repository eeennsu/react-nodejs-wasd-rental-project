import type { FC } from 'react';
import { useSearchStore } from '../../../../../../zustand';

import useTabsStore from '../../../../../../zustand/tabsStore/useTabsStore';
import useSuppliesStore from '../../../../../../zustand/suppliesStore/useSuppliesStore';
import Thead from './Thead';
import Tbody from './Tbody';

const Table: FC = () => {
    
    const { activeTab } = useTabsStore();
    const { setVRsData, setTabletsData, setLectureRoomsData } = useSuppliesStore();
    const { searchTerm } = useSearchStore();


    // 검색어는 잠깐 생략
    // useEffect(() => {
    //     deleteAllDatas();

    //     if (searchTerm.length === 0) {
    //         switch(activeTab) {            
    //             case 0: 
    //                 setVRsData(vrsDataResponse?.data);
    //                 break;
    
    //             case 1:
               
    //                 setTabletsData(tabletsResponse?.data);
    //                 break;
    
    //             case 2: 
         
    //                 setLectureRoomsData(lectrueRoomsResponse?.data);
    //                 break;
                
    //             default:
    //                 throw new Error(`${activeTab} is not defined.`);   
    //         }        
    //     }        
    // }, [activeTab, queryClient, setVRsData, setTabletsData, setLectureRoomsData, deleteAllDatas, vrsDataResponse, tabletsResponse, lectrueRoomsResponse]);

    // useEffect(() => {        
    //     if (vrsDataResponse && tabletsResponse && lectrueRoomsResponse) {
    //         deleteAllDatas();

    //         switch(activeTab) {            
    //             case 0: 
    //                 setVRsData(vrsDataResponse?.data);
    //                 break;
    
    //             case 1:
                
    //                 setTabletsData(tabletsResponse?.data);
    //                 break;
    
    //             case 2: 
            
    //                 setLectureRoomsData(lectrueRoomsResponse?.data);
    //                 break;
                
    //             default:
    //                 throw new Error(`${activeTab} is not defined.`);   
    //         }  
    //     }
       
    // }, [activeTab, queryClient, vrsDataResponse, tabletsResponse, lectrueRoomsResponse]);
    
    return (
        <table className='w-full text-center border-collapse table-auto table-sm '>
            <Thead />
            <Tbody />                            
        </table>      
    );
};

export default Table;