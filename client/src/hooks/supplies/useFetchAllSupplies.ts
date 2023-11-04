import type { UseQueryResult } from '@tanstack/react-query';
import { useQueries } from '@tanstack/react-query';
import{ getTools_API, getLectureRooms_API } from '../../api/supplies/suppliesApis';
import { suppliesQueryKeys } from '../../pages/RentPage/constants';
import { AxiosError, AxiosResponse } from 'axios';

// const queries = [
//     {
//         key: 'fetch_vrs',
//         api: getVRs_API
//     },
//     {
//         key: 'fetch_tablets',
//         api: getTablets_API
//     },
//     {
//         key: 'fetch_lecture_rooms',
//         api: getLectureRooms_API
//     }
// ];

// const { data: vrsData } = useFetchVRs();
// const { data: tabletsData } = useFetchTablets();
// const { data: lectureRoomsData } = useFetchLectureRooms();   

const useFetchAllSupplies = () => {

    const queryResults = useQueries<[UseQueryResult<AxiosResponse<Tool[], AxiosError>>, UseQueryResult<AxiosResponse<LectureRoom[], AxiosError>>]>({
        queries: [
            {
                queryKey: [suppliesQueryKeys[0]],
                queryFn: getTools_API,
            },
            { 
                queryKey: [suppliesQueryKeys[1]],
                queryFn: getLectureRooms_API,
            }
        ]
    });

    return queryResults;
}

export default useFetchAllSupplies;