import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import { Spin } from 'antd';
import DataBox from '../teplate/DataBox';
import useViewTool from '../../../../../queries/tool/useViewTools';

const AllDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useViewTool(page);

    console.log('all datas', data);

    return (
        <>
            {
                isLoading ? (
                    <div className='flex items-center justify-center flex-1'>
                        <Spin size='large' />
                    </div>
                ) : (
                    data?.result.map((tool) => (
                        <DataBox key={tool.tool_id} toolData={tool} />
                    ))                
                )
            }
        </>
    );
};

export default AllDatas;