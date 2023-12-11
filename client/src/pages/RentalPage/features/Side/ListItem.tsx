import type { FC, PropsWithChildren } from 'react';
import { Tooltip } from 'antd';
import { getToolName } from '../../utils/tables';

type Props = {
    item: ExistCurRental;
}

const ListItem: FC<Props> = ({ item: { D_day, result } }) => {

    const toolName = result.tool.tool_name;
    const tooltipTitle = toolName === '강의실' ? result.tool_id : toolName === 'VR 실습기기' ? result.tool.tool_content : result.tool.tool_content;
    const color = toolName === '강의실' ? 'green' : toolName === 'VR 실습기기' ? 'cyan' : '';

    return (
        <ItemTemplate>
            <span className='w-1/2 font-semibold'>
                <Tooltip placement='left' title={tooltipTitle} color={color}>
                    {getToolName(result.tool.tool_name)}
                </Tooltip>
            </span>
            <span className={`${(D_day === '미반납' ? 'text-err-red' : D_day === 'TODAY' ? 'font-extrabold' : '')} w-1/2`}>
                {D_day} 
            </span>
        </ItemTemplate>
    );
};

export default ListItem;



export const ItemTemplate: FC<PropsWithChildren> = ({ children }) => {

    return(
        <li className='flex items-center w-full h-[34px] px-1.5 text-md border-t border-t-[#00000080] font-[500] bg-03 text-center'>
           {children}
        </li>
    );
}

export const EmptyItem: FC = () => <ItemTemplate />

export const Skeleton: FC = () => {
    
    return (
        <li className='h-[29px] px-1.5 text-sm bg-03 w-full'>
            <div className='bg-04 h-[22px] animate-pulse' />
        </li>
    )
}