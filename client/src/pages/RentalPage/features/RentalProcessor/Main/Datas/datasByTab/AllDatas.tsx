import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataRow from '../teplate/DataRow';
import useViewTool from '../../../../../queries/tool/useViewTools';
import DataLoading from '../teplate/DataLoading';
import FetchDatasError from '../teplate/FetchDatasError';

const AllDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useViewTool(page);

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

export default AllDatas;