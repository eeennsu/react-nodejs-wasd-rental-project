import type { FC } from 'react';
import Side from './features/Side/Side';
import RentalProcessor from './features/RentalProcessor/RentalProcessor';

const RentPage: FC = () => {

    return (
        <div className='flex w-full gap-10 mt-4'>
            <aside className='w-1/5'>
                <Side />
            </aside>
            <section className='flex-1 w-4/5'>
                <RentalProcessor />
            </section>        
        </div>
    );
};

export default RentPage;