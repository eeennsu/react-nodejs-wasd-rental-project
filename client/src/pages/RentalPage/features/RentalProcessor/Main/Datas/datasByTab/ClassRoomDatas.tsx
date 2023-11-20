import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import DataBox from '../teplate/DataBox';
import useRangeTool from '../../../../../queries/tool/useRangeTool';
import DataLoading from '../teplate/DataLoading';

const ClassRoomDatas: FC = () => {

    // const { page } = useToolStore();
    // const { data, isLoading, error } = useRangeTool('x', page);

    // console.log('classRoomData', data);

    return (
        <>
            {/* {
                isLoading ? (
                    <DataLoading />
                ) : (
                    data?.result.map((tool) => (
                        <DataBox key={tool.tool_id} toolData={tool} />
                    ))                
                )
            } */}
            강의실은 보류
        </>
    );
};

export default ClassRoomDatas;