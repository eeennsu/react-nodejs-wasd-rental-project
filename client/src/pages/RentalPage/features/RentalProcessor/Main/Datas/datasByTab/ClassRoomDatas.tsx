import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import { messages } from '../../../../../constants';
import DataRow from '../teplate/DataRow';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';
import FetchDatasError from '../teplate/FetchDatasError';
import EmptryResult from '../../../Search/EmptryResult';

const ClassRoomDatas: FC = () => {

    const curPage = useToolStore(state => state.curPage);
    const { data, isLoading, error } = useRangeTool('강의실', curPage);

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
        data?.result && data.result?.length >= 1 ? (
            data?.result?.map((classRoomData) => (
                <DataRow key={classRoomData.tool_id} data={classRoomData} />
            ))
        ) : (
            <EmptryResult msg={messages.noData} />
        )
    );
};

export default ClassRoomDatas;