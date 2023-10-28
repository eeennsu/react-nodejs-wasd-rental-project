import type { FC } from 'react';
import { useEffect } from 'react';
import { useSearchStore } from '../../../../../../zustand';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { suppliesQueryKeys } from '../../../../constants';

import useTabsStore from '../../../../../../zustand/tabsStore/useTabsStore';
import useSuppliesStore from '../../../../../../zustand/suppliesStore/useSuppliesStore';
import Thead from './Thead';
import Tbody from './Tbody';
import useFetchAllSupplies from '../../../../../../hooks/supplies/useFetchAllSupplies';

const Table: FC = () => {
    
    const allSuppliesResults = useFetchAllSupplies();
    const isLoadingAnyQuery = allSuppliesResults.some(query => query.isLoading);
    const { activeTab } = useTabsStore();
    const { setVRsData, setTabletsData, setLectureRoomsData, deleteAllDatas } = useSuppliesStore();
    const { searchTerm } = useSearchStore();

    const queryClient = useQueryClient();

    const vrsDataResponse = queryClient.getQueryData([suppliesQueryKeys[0]]) as AxiosResponse<Tablet[], AxiosError>;
    const tabletsResponse = queryClient.getQueryData([suppliesQueryKeys[1]]) as AxiosResponse<Tablet[], AxiosError>;
    const lectrueRoomsResponse = queryClient.getQueryData([suppliesQueryKeys[2]]) as AxiosResponse<LectureRoom[], AxiosError>;
    
    useEffect(() => {
        deleteAllDatas();

        if (searchTerm.length === 0) {
            switch(activeTab) {            
                case 0: 
                    setVRsData(vrsDataResponse?.data);
                    break;
    
                case 1:
               
                    setTabletsData(tabletsResponse?.data);
                    break;
    
                case 2: 
         
                    setLectureRoomsData(lectrueRoomsResponse?.data);
                    break;
                
                default:
                    throw new Error(`${activeTab} is not defined.`);   
            }        
        }        
    }, [activeTab, queryClient, setVRsData, setTabletsData, setLectureRoomsData, deleteAllDatas, vrsDataResponse, tabletsResponse, lectrueRoomsResponse]);

    return (
        isLoadingAnyQuery ? (
            '로딩중...'
        ) : (
            <table className='w-full h-full text-center border-collapse table-auto table-sm'>
                <Thead />
                <Tbody />                     
            </table>
        )        
    );
};

export default Table;