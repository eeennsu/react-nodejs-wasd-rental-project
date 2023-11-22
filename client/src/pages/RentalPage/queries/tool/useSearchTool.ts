import { useQuery } from '@tanstack/react-query';
import { searchTool_API } from '../../../../api/tool/toolApis';
import { AxiosError, AxiosResponse } from 'axios';

const useSearchTool = (searchTerm: string, page: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResSearchTool, AxiosError>>({
        queryKey: ['search-tool', { searchTerm }],
        queryFn: () => searchTool_API(searchTerm, page),
        enabled: Boolean(searchTerm && page)   
    });

    return {
        data: data?.data, error, isLoading
    };
}

export default useSearchTool;