import type { FC } from 'react';
import Side from './features/Side';
import RentalProcessor from './features/RentalProcessor';

const RentPage: FC = () => {

    return (
        <div className='flex w-full bg-slate-300'>
            <aside className='w-1/5 bg-slate-200'>
                <Side />
            </aside>
            <section className='w-4/5 bg-pink-200' >
                <RentalProcessor />
            </section>
        </div>
    );
};

export default RentPage;