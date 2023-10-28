import { useQuery } from '@tanstack/react-query';
import{ getTablets_API } from '../../api/supplies/apis';

const useFetchTablets = () => {
    const { data, isLoading, isError, error } = useQuery(
        ['fetch_tablets'],
        getTablets_API,
    );

    return {
        data, isLoading, isError, error
    };
}

export default useFetchTablets;