import type { FC } from 'react';
import useViewTool from '../../../../../queries/tool/useViewTools';
import { useToolStore } from '../../../../../../../zustand';
import DataBox from '../teplate/DataBox';
import { Spin } from 'antd';
import useRangeTool from '../../../../../queries/tool/useRangeTool';

const VRDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useRangeTool('VR 실습기기', page);

    return (
        <>
            {
                isLoading ? (
                    <div className='flex-1 '>
                        <Spin />
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

export default VRDatas;