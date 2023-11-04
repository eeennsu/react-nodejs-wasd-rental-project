import type { FC } from 'react';
import { useEffect } from 'react';
import Side from './features/Side';
import RentalProcessor from './features/RentalProcessor/RentalProcessor';
import axios from 'axios';

const RentPage: FC = () => {

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://125.248.162.81:80/test/getTest/dbsxo149');
            console.log(response);
        })(); 
    }, []);  

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