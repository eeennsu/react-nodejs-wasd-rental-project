import type { FC } from 'react';

type Props = {
    item?: ExistCurRental;
}

const DetailsItem: FC<Props> = ({ item }) => {

    const toolName = item?.result.tool.tool_name;
    const name = toolName === 'x' ? item?.result.tool_id : toolName === 'VR 실습기기' ? '오큘러스' : '타블렛';

    return (
        <li className='flex items-center justify-around w-full  h-[29px] px-1.5 text-sm border-t border-t-[#00000080] font-[500] bg-03'>
            {
                item && (
                    <>
                        <span className='text-center'>
                            {name}
                        </span>
                        <span className={`text-center  ${item.D_day === 'TODAY' && 'text-red-400'}`}>
                            {item.D_day} 
                        </span>
                    </>
                )
            }      
        </li>
    );
};

export default DetailsItem;