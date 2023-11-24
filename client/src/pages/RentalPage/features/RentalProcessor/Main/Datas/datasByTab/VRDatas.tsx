import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataRow from '../teplate/DataRow';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';
import FetchDatasError from '../teplate/FetchDatasError';

const VRDatas: FC = () => {

    const page = useToolStore(state => state.page);
    const { data, isLoading, error } = useRangeTool('VR 실습기기', page);

    if (isLoading) {
        return (
            <DataLoading />
        );
    }

    if (error) {
        return (
            <FetchDatasError />
        );
    }

    return data?.result.map((tool) => (
        <DataRow key={tool.tool_id} toolData={tool} />
    ));  
};

export default VRDatas;