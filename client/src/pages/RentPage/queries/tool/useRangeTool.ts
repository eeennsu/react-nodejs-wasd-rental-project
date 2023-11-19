import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { rangeTool_API } from '../../../../api/tool/toolApis';

const useRangeTool = (tool_name: string, page: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResRangeTool, AxiosError>>({
        queryKey: ['range-tool', { tool_name, page }],
        queryFn: () => rangeTool_API(tool_name, page),
        enabled: Boolean(tool_name && page),
        keepPreviousData: true,
    });

    return {
        data: data?.data, error, isLoading
    };
}

export default useRangeTool;