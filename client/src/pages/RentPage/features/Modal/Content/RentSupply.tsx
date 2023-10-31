import type { FC } from 'react';
import ModalTemplate from '../Template';

const RentSupply: FC = () => { 

    return (
        <ModalTemplate className='flex items-center'>
            <div className='grid w-7/12 h-full grid-rows-3 bg-red-600'>
                <div className='bg-slate-500'>
                        
                </div>
                <div className='bg-yellow-200'>

                </div>
                <div className='bg-red-300'>

                </div>
            </div>
            <div className='w-5/12 h-full bg-zinc-300'>

            </div>
        </ModalTemplate>
    );
};

export default RentSupply;