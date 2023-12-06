import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { myRentalList_API } from '../../../../api/rental/rentalApi';

const useMyRentalList = (user_id: string) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResMyRentalList, AxiosError>>({
        queryKey: ['my-rental-list', { user_id }],
        queryFn: () => myRentalList_API(user_id),
        enabled: Boolean(user_id),   
    });
    
    return {
        data: data?.data, error, isLoading
    };
}

export default useMyRentalList;