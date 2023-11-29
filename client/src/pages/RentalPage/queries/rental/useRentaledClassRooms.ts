import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { notClassroomCount_API } from '../../../../api/rental/rentalAPis';

const useRentaledClassRooms = (tool_id: ClassRoomName) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResNotClassroomCount, AxiosError>>({
        queryKey: ['not-classroom-count', { tool_id }],
        queryFn: () => notClassroomCount_API(tool_id),
        enabled: Boolean(tool_id),   
    });
    
    return {
        data: data?.data, error, isLoading
    };
}

export default useRentaledClassRooms;