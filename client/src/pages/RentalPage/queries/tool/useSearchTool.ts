import { useQuery } from '@tanstack/react-query';
import { searchTool_API } from '../../../../api/tool/toolApi';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useToolStore } from '../../../../zustand';

const useSearchTool = (searchTerm: string, page: number, isSubmit: boolean) => {

    const { data, isError, error, isFetching } = useQuery<AxiosResponse<ResSearchTool, AxiosError>>({
        queryKey: ['search-tool', { searchTerm, page }],
        queryFn: () => searchTool_API(searchTerm, page),
        enabled: Boolean(isSubmit && searchTerm && page)   
    });

    const setTotal = useToolStore(state => state.setTotal);

    useEffect(() => {
        if (data?.data.total) {
            setTotal(data.data.total);
        }       
    }, [data]);

    return {
        data: data?.data ?? null, isError, error, isFetching
    };
}

export default useSearchTool;



