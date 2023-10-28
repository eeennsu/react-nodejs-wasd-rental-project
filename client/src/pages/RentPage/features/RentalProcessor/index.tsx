import type { FC } from 'react';
import Search from './Search/Search';
import Supplies from './Supplies/Tabs/Supplies';

const RentalProcessor: FC = () => {

    return (
        <div className='flex flex-col h-full py-20 mx-auto max-w-7xl'>
            <section className='flex justify-end'>
                <Search />
            </section>          
            <section className='w-full h-full mt-16'>
                <Supplies />
            </section>
        </div>
    );
};

export default RentalProcessor;