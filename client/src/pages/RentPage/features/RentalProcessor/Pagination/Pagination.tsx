import type { FC } from 'react';
import { Pagination as AntdPagination } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { useSuppliesStore, useTabsStore } from '../../../../../zustand';
import { AxiosError, AxiosResponse } from 'axios';
import { suppliesQueryKeys } from '../../../constants';
import { useQueryClient } from '@tanstack/react-query';

// const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
//     console.log(current, pageSize);
// };

const Pagination: FC = () => {

    const { 
        VRsData, setVRsData,
        tabletsData, setTabletsData,
        lectureRoomsData, setLectureRoomsData,
        setPaginatedDats, resetPaginatedDatas,
        resetAllDatas
    } = useSuppliesStore();
    const { activeTab } = useTabsStore();
    
    const [curPage, setCurPage] = useState<number>(1); 
    const itemsPerPage = 10; 

    const queryClient = useQueryClient();

    const vrsDataResponse = queryClient.getQueryData([suppliesQueryKeys[0]]) as AxiosResponse<VR[], AxiosError>;
    const tabletsResponse = queryClient.getQueryData([suppliesQueryKeys[1]]) as AxiosResponse<Tablet[], AxiosError>;
    const lectrueRoomsResponse = queryClient.getQueryData([suppliesQueryKeys[2]]) as AxiosResponse<LectureRoom[], AxiosError>;

    const handleCurPageChange = (page: number, pageSize: number) => {
        setCurPage(page);
    }

    const getTotalDataLength = useCallback((activeTab: ActiveTab) => {
        switch(activeTab) {
            case 0: 
                return VRsData.length;

            case 1: 
                return tabletsData.length;

            case 2:
                return lectureRoomsData.length;
        }
    }, [activeTab, VRsData, tabletsData, lectureRoomsData]);

    useEffect(() => {            
        if (vrsDataResponse && tabletsResponse && lectrueRoomsResponse) {
            switch(activeTab) {            
                case 0: 
                    if (vrsDataResponse?.data.length >= 1) {  
                        setVRsData(vrsDataResponse.data);
                    }
    
                    break;
    
                case 1:
                    if (tabletsResponse?.data.length >= 1) {                    
                        setTabletsData(tabletsResponse.data);
                    } 

                    break;
    
                case 2: 
                    if (lectrueRoomsResponse?.data.length >= 1) {                
                        setLectureRoomsData(lectrueRoomsResponse.data);
                    }

                    break;
                
                default:
                    throw new Error(`${activeTab} is not defined.`);   
            }     
            setCurPage(1); 
        }    
          
    }, [activeTab, vrsDataResponse, tabletsResponse, lectrueRoomsResponse]);

    useEffect(() => {
        if (VRsData.length >= 1 || tabletsData.length >= 1 || lectureRoomsData.length >= 1) {
            switch(activeTab) {
                case 0 : 
                    setPaginatedDats(VRsData.slice(
                        (curPage - 1) * itemsPerPage,
                        curPage * itemsPerPage
                    ));
    
                    break;
    
                case 1: 
                    setPaginatedDats(tabletsData.slice(
                        (curPage - 1) * itemsPerPage,
                        curPage * itemsPerPage
                    ));
    
                    break;
    
                case 2: 
                    setPaginatedDats(lectureRoomsData.slice(
                        (curPage - 1) * itemsPerPage,
                        curPage * itemsPerPage
                    ));
    
                    break;
            }      
        }       

    }, [curPage, VRsData, tabletsData, lectureRoomsData]);

    return (
        <AntdPagination 
            defaultCurrent={1}
            current={curPage}
            onChange={handleCurPageChange} 
            total={getTotalDataLength(activeTab)}  
        />
    );
};

export default Pagination;