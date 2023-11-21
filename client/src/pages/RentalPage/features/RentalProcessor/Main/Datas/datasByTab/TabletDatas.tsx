import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataRow from '../teplate/DataRow';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';

const TabletDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useRangeTool('타블렛', page);

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
        <DataRow key={tool.tool_id} toolData={tool} />
    ));  
};

export default TabletDatas;