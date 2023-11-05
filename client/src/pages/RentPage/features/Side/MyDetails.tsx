import type { FC } from 'react';
import DetailsItem from './DetailsItem';
import { useState, useEffect } from 'react';

type Props = {
    title: string;
    datas: string[]
}

const MyDetails: FC<Props> = ({ title, datas }) => {

    return (
        <div className='flex flex-col items-center shadow-left w-[160px]'>
            <h2 className='w-full py-1.5 text-sm font-semibold text-center text-white rounded-t-[4px] bg-01'>
                {title}
            </h2>
            <ul className='w-full overflow-x-auto overflow-y-auto list-none list-inside text whitespace-nowrap h-[210px]'>
                {
                    datas.map((item, i) => (
                        <DetailsItem item={item} key={i} />
                    ))
                }
            </ul>
        </div>
    );
};

export default MyDetails;