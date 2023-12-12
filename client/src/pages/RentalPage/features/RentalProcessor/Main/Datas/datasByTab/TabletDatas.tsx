import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import { messages } from '../../../../../constants';
import DataRow from '../teplate/DataRow';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';
import FetchDatasError from '../teplate/FetchDatasError';
import EmptryResult from '../../../Search/EmptryResult';

const TabletDatas: FC = () => {

    const curPage = useToolStore(state => state.curPage);
    const { data, isLoading, error } = useRangeTool('타블렛', curPage);

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

    return (
        data?.result && data.result.length >= 1 ? (
            data.result.map((data) => (
                <DataRow key={data.tool_id} data={data} />
            ))
        ) : (
            <EmptryResult msg={messages.noData} />
        )
    );
};

export default TabletDatas;