import type { FC } from 'react';
import { useStepStore } from '../../zustand';
import { getContent } from './utils/step';
import Side from './features/Side/Side';
import './features/app.css';

const RentPage: FC = () => {

    const systemStep  = useStepStore(state => state.systemStep);

    return (
        <div className='flex flex-col-reverse w-full h-full mt-6 md:flex-row gap-x-6 md:mt-7'>            
            <aside className='md:w-1/5 '>
                <Side />
            </aside>
            <section className='mb-10 md:w-4/5 3xl:mb-0'>
                {getContent(systemStep)}
            </section>        
        </div>
    );
};

export default RentPage;

