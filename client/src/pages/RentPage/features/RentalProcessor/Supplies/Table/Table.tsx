import { useEffect, type FC } from 'react';
import { useSearchStore, useTabsStore, useSuppliesStore } from '../../../../../../zustand';
import EmptySearchResult from '../../Search/EmptySearchResult';
import ToolTr from './ToolTr';
import LectureRoomTr from './LectureRoomTr';

const Table: FC = () => {
    
    const { activeTab } = useTabsStore();
    const { setVRsData, setTabletsData, setLectureRoomsData } = useSuppliesStore();
    const { searchTerm } = useSearchStore();
    const { VRsData, tabletsData, lectureRoomsData } = useSuppliesStore();

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
        <table className='w-full h-full border-collapse'>
            <tbody className='flex flex-col gap-[11px]'>
                {/* {
                    (activeTab === 1) ? (
                        VRsData?.map((vr) => (
                            <ToolTr key={vr.tool_id} toolData={vr} />
                        ))
                    ) : (activeTab === 2) ? (
                        tabletsData?.map((tablet) => (
                            <ToolTr key={tablet.tool_id} toolData={tablet} />
                        ))
                    ) : (activeTab === 3) ? (
                        lectureRoomsData?.map((room) => (
                            <LectureRoomTr key={room.room_id} lectureRoomData={room} />
                        ))
                    ) : null        
                } */}
                {
                    activeTab === 0 ? (
                        'ㄴㅁㅇ'
                    ) : 'ㄱㄷ'
                }
            </tbody>                         
        </table>   
    );
};

export default Table;