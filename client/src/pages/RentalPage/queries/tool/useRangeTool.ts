import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { rangeTool_API } from '../../../../api/tool/toolApis';
import { useEffect } from 'react';
import { useToolStore } from '../../../../zustand';


const useRangeTool = (tool_name: ToolName, page: number) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResRangeTool, AxiosError>>({
        queryKey: ['range-tool', { tool_name, page }],
        queryFn: () => rangeTool_API(tool_name, page),
        enabled: Boolean(tool_name && page),
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

export default useRangeTool;