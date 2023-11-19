import { useQuery } from '@tanstack/react-query';
import { viewTools_API } from '../../../../api/tool/toolApis';
import { AxiosError, AxiosResponse } from 'axios';

const useViewTool = (page: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResViewTools, AxiosError>>({
        queryKey: ['view-tools', { page }],
        queryFn: () => viewTools_API(page),
        enabled: Boolean(page),
        keepPreviousData: true,
    });

    return {
        data: data?.data, error, isLoading
    };
}

export default useViewTool;