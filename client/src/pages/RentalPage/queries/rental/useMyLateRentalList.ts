import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { myLateRentalList_API } from '../../../../api/rental/rentalApi';

const useMyLateRentalList = (user_id: string) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResMyLateRentalList, AxiosError>>({
        queryKey: ['my-late-rental-list', { user_id }],
        queryFn: () => myLateRentalList_API(user_id),
        enabled: Boolean(user_id),   
    });
    
    return {
        data: data?.data, error, isLoading
    };
}

export default useMyLateRentalList;