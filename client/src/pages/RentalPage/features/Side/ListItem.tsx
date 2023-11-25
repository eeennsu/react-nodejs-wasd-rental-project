import type { FC } from 'react';

type Props = {
    item?: ExistCurRental;
}

const DetailsItem: FC<Props> = ({ item }) => {

    const toolName = item?.result.tool.tool_name;
    const name = toolName === 'x' ? item?.result.tool_id : toolName === 'VR 실습기기' ? '오큘러스' : '타블렛';

    return (
        <li className='flex items-center justify-around w-full h-[29px] px-1.5 text-sm border-t border-t-[#00000080] font-[500] bg-03'>
            {
                item && (
                    <>
                        <span>
                            {name}
                        </span>
                        <span className={`${(item.D_day === 'TODAY' || item.D_day === 'D+1') && 'font-extrabold'}`}>
                            {item.D_day} 
                        </span>
                    </>
                )
            }      
        </li>
    );
};

export default DetailsItem;



export const Skeleton: FC = () => {
    
    return (
        <li className='h-[29px] px-1.5 text-sm bg-03 w-full'>
            <div className='bg-04 h-[22px] animate-pulse' />
        </li>
    )
}