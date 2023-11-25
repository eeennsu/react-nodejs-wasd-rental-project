import { useQuery } from '@tanstack/react-query';
import { searchTool_API } from '../../../../api/tool/toolApis';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useToolStore } from '../../../../zustand';

const useSearchTool = (searchTerm: string, page: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResSearchTool, AxiosError>>({
        queryKey: ['search-tool', { searchTerm }],
        queryFn: () => searchTool_API(searchTerm, page),
        enabled: Boolean(searchTerm && page)   
    });

    const setTotalPage = useToolStore(state => state.setTotalPage);

    useEffect(() => {
        data?.data.total && setTotalPage(data.data.total);
    }, [data]);

    return {
        data: data?.data ?? null, error, isLoading
    };
}

export default useSearchTool;



