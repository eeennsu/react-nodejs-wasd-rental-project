import type { FC } from 'react';
import Search from './Search/Search';
import Supplies from './Supplies/Tabs/Supplies';
import useFetchAllSupplies from '../../../../hooks/supplies/useFetchAllSupplies';
import { useQueryClient } from '@tanstack/react-query';

const RentalProcessor: FC = () => {

    useFetchAllSupplies();
    const queryClient = useQueryClient();
    const isAnyoneLoading = queryClient.isFetching() >= 1;

    return (
        <div className='flex flex-col h-full py-16 mx-auto max-w-7xl '>
            <section className='flex justify-end'>
                <Search />
            </section>          
            <section className='w-full h-full mt-16'>
                <Supplies isAnyoneLoading={isAnyoneLoading} />
            </section>        
        </div>
    );
};

export default RentalProcessor;