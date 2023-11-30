import { useQuery } from '@tanstack/react-query';
import { viewTools_API } from '../../../../api/tool/toolApis';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useToolStore } from '../../../../zustand';

const useViewTool = (curPage: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResViewTools, AxiosError>>({
        queryKey: ['view-tools', { curPage }],
        queryFn: () => viewTools_API(curPage),
        enabled: Boolean(curPage),
        keepPreviousData: true,        
    });

    const setTotal = useToolStore(state => state.setTotal);
    
    useEffect(() => {
        if (data?.data.total) {
            setTotal(data.data.total);
        }        
    }, [data]);

    return {
        data: data?.data ?? null, error, isLoading
    };
}

export default useViewTool;