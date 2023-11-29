import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataRow from '../teplate/DataRow';
import useViewTool from '../../../../../queries/tool/useViewTools';
import DataLoading from '../teplate/DataLoading';
import FetchDatasError from '../teplate/FetchDatasError';

const AllDatas: FC = () => {

    const curPage = useToolStore(state => state.curPage);
    const { data, isLoading, error } = useViewTool(curPage);

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

    return data?.result.map((data) => (
        <DataRow key={data.tool_id} data={data} />
    ));  
};

export default AllDatas;