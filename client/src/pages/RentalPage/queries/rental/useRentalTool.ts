import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { rentalTool_API } from '../../../../api/rental/rentalApi';

const useRentalTool = ({ tool_id, user_id }: RentalTool) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResRentalTool, AxiosError>>({
        queryKey: ['rental-tool', { tool_id, user_id }],
        queryFn: () => rentalTool_API({ tool_id, user_id }),
        enabled: Boolean(tool_id && user_id),   
        refetchOnWindowFocus: false,
    });

    return {
        data: data?.data, error, isLoading
    };
}

export default useRentalTool;