import { useQuery } from '@tanstack/react-query';
import { oneViewTool_API } from '../../../../api/tool/toolApis';
import { AxiosError, AxiosResponse } from 'axios';

const useOneViewTool = (tool_id: string) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResOneViewTool, AxiosError>>({
        queryKey: ['one-view-tool', { tool_id }],
        queryFn: () => oneViewTool_API(tool_id),
        enabled: Boolean(tool_id)   
    });

    return {
        data: data?.data, error, isLoading
    };
}

export default useOneViewTool;