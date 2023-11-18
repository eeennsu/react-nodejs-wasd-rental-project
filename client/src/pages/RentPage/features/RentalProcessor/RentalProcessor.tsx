import type { FC } from 'react';
import Search from './Search/Search';
import Supplies from './Supplies/Supplies';
import Template from '../Step/templates/Template';

const RentalProcessor: FC = () => {

    return (
        <Template className='flex flex-col-reverse mt-8 md:flex-col md:mt-14'>
            <section className='flex justify-end px-6 pb-6 md:p-0'>
                <Search />
            </section>          
            <section className='w-11/12 mx-auto md:w-full md:mx-0'>
                <Supplies />
            </section>        
        </Template>
    );
};

export default RentalProcessor;