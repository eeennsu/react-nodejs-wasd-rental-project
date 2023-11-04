import { useQuery } from '@tanstack/react-query';
import{ getLectureRooms_API } from '../../api/supplies/suppliesApis';

const useFetchLectureRooms = () => {
    const { data, isLoading, isError, error } = useQuery(
        ['fetch_lecture_rooms'],
        getLectureRooms_API,
    );

    return {
        data, isLoading, isError, error
    };
}

export default useFetchLectureRooms;