import type { FC } from 'react';

type Props = {
    item: string;
}

const DetailsItem: FC<Props> = ({ item }) => {

    return (
        <li className='flex items-center w-full h-[29px] 3xl:h-[30px] pl-3 text-sm border-t border-t-[#00000080] font-[500]  bg-03'>
            {item}
        </li>
    );
};

export default DetailsItem;