import type { FC } from 'react';
import DetailsItem from './DetailsItem';
import { useState, useEffect } from 'react';

type Props = {
    title: string;
    datas: string[];
}

const MyDetails: FC<Props> = ({ title, datas }) => {

    return (
        <div className='flex flex-col items-center shadow-left w-[150px]'>
            <h2 className='w-full flex items-center justify-center h-[29px] text-sm font-semibold  rounded-t-[4px] text-white bg-01'>
                {title}
            </h2>
            <ul className='w-full overflow-x-auto overflow-y-auto list-none list-inside text whitespace-nowrap h-[203px]  my-scr'>
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