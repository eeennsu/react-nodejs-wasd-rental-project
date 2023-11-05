import type { FC } from 'react';

type Props = {
    item: string;
}

const DetailsItem: FC<Props> = ({ item }) => {

    return (
        <li className='pl-3 font-[500] text-sm border-t bg-03 border-t-[#00000080] h-[30px] flex items-center'>
            {item}
        </li>
    );
};

export default DetailsItem;