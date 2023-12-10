import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { notClassroomCount_API } from '../../../../api/rental/rentalApi';

const useNotClassroomCount = (classroomName: ClassRoomName) => {

    const { data, error, isLoading } = useQuery<AxiosResponse<ResNotClassroomCount, AxiosError>>({
        queryKey: ['not-classroom-count', { classroomName }],
        queryFn: () => notClassroomCount_API(classroomName),
        enabled: Boolean(classroomName),   
        cacheTime: 0
    });
    
    return {
        data: data?.data, error, isLoading
    };
}

export default useNotClassroomCount;