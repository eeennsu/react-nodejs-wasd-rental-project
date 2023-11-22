import type { FC, ReactNode } from 'react';
import { Pagination as AntdPagination } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { useToolStore, useTabsStore } from '../../../../../zustand';
import { AxiosError, AxiosResponse } from 'axios';
import { suppliesQueryKeys } from '../../../constants';
import { useQueryClient } from '@tanstack/react-query';
import PGButton from './PGButton';

// const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
//     console.log(current, pageSize);
// };

const Pagination: FC = () => {

    // const { 
    //     VRsData, setVRsData,
    //     tabletsData, setTabletsData,
    //     lectureRoomsData, setLectureRoomsData,
    //     setPaginatedDatas, resetPaginatedDatas,
    //     resetAllDatas
    // } = useToolStore();
    // const { activeTab } = useTabsStore();
    
    
    // const queryClient = useQueryClient();
    
    // const vrsDataResponse = queryClient.getQueryData([suppliesQueryKeys[0]]) as AxiosResponse<VR[], AxiosError>;
    // const tabletsResponse = queryClient.getQueryData([suppliesQueryKeys[1]]) as AxiosResponse<Tablet[], AxiosError>;
    // const lectrueRoomsResponse = queryClient.getQueryData([suppliesQueryKeys[2]]) as AxiosResponse<LectureRoom[], AxiosError>;

    // const getTotalDataLength = useCallback((activeTab: ActiveTab) => {
    //     switch(activeTab) {
    //         case 0: 
    //             return VRsData.length;

    //         case 1: 
    //             return tabletsData.length;

    //         case 2:
    //             return lectureRoomsData.length;
    //     }
    // }, [activeTab, VRsData, tabletsData, lectureRoomsData]);

    // useEffect(() => {            
    //     if (vrsDataResponse && tabletsResponse && lectrueRoomsResponse) {
    //         switch(activeTab) {            
    //             case 0: 
    //                 if (vrsDataResponse?.data.length >= 1) {  
    //                     setVRsData(vrsDataResponse.data);
    //                 }
    
    //                 break;
    
    //             case 1:
    //                 if (tabletsResponse?.data.length >= 1) {                    
    //                     setTabletsData(tabletsResponse.data);
    //                 } 

    //                 break;
    
    //             case 2: 
    //                 if (lectrueRoomsResponse?.data.length >= 1) {                
    //                     setLectureRoomsData(lectrueRoomsResponse.data);
    //                 }

    //                 break;
                
    //             default:
    //                 throw new Error(`${activeTab} is not defined.`);   
    //         }     
    //         setCurPage(1); 
    //     }    
          
    // }, [activeTab, vrsDataResponse, tabletsResponse, lectrueRoomsResponse]);

    // useEffect(() => {
    //     if (VRsData.length >= 1 || tabletsData.length >= 1 || lectureRoomsData.length >= 1) {
    //         switch(activeTab) {
    //             case 0 : 
    //                 setPaginatedDatas(VRsData.slice(
    //                     (curPage - 1) * itemsPerPage,
    //                     curPage * itemsPerPage
    //                 ));
    
    //                 break;
    
    //             case 1: 
    //                 setPaginatedDatas(tabletsData.slice(
    //                     (curPage - 1) * itemsPerPage,
    //                     curPage * itemsPerPage
    //                 ));
    
    //                 break;
    
    //             case 2: 
    //                 setPaginatedDatas(lectureRoomsData.slice(
    //                     (curPage - 1) * itemsPerPage,
    //                     curPage * itemsPerPage
    //                 ));
    
    //                 break;
    //         }      
    //     }       

    // }, [curPage, VRsData, tabletsData, lectureRoomsData]);

    const { activeTab } = useTabsStore();

    const { page: curPage, setPage } = useToolStore();
    const handleCurPageChange = (page: number, pageSize: number) => {
        setPage(page);
    }

    const itemRender = (page: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", element: ReactNode): ReactNode => {
        if (type === 'page') {
            return (
                <PGButton curPage={curPage}>
                    {page}
                </PGButton>
            );
        }

        return element;
    }

    return (
        <AntdPagination 
            defaultCurrent={1}
            current={curPage}
            onChange={handleCurPageChange} 
            total={activeTab === 0 ? 48 : activeTab === 1 ? 21 : activeTab === 2 ? 19 : 8}
            itemRender={itemRender}  
            showQuickJumper={false}
            showSizeChanger={false}
            showLessItems
         />      
    );
};

export default Pagination;