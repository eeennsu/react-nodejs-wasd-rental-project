import type { FC } from 'react';
import Side from './features/Side';
import RentalProcessor from './features/RentalProcessor/RentalProcessor';

const RentPage: FC = () => {

    return (
        <div className='flex w-full bg-slate-500'>
            <aside className='w-1/5 bg-slate-200'>
                <Side />
            </aside>
            <section className='flex-1 w-4/5 bg-pink-200'>
                <RentalProcessor />
            </section>
        
        </div>
    );
};

export default RentPage;