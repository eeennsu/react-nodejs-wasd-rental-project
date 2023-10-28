import { useQueries } from '@tanstack/react-query';
import{ getVRs_API, getTablets_API, getLectureRooms_API } from '../../api/supplies/apis';
import { suppliesQueryKeys } from '../../pages/RentPage/constants';


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

    // const queryResults = useQueries({
    //     queries: queries.map(({ key, api }) => ({
    //         queryKey: [key],
    //         queryFn: api
    //     }))
    // });

    const queryResults = useQueries({
        queries: [
            {
                queryKey: [suppliesQueryKeys[0]],
                queryFn: getVRs_API
            },
            {
                queryKey: [suppliesQueryKeys[1]],
                queryFn: getTablets_API
            },
            {
                queryKey: [suppliesQueryKeys[2]],
                queryFn: getLectureRooms_API
            }
        ]
    });
    
    return queryResults;
}

export default useFetchAllSupplies;