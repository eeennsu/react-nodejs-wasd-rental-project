import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataBox from '../teplate/DataBox';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';

const VRDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useRangeTool('VR 실습기기', page);

    if (isLoading) {
        return (
            <DataLoading />
        );
    }

    if (error) {
        return (
            'error...'
        );
    }

    return data?.result.map((tool) => (
        <DataBox key={tool.tool_id} toolData={tool} />
    ));  
};

export default VRDatas;