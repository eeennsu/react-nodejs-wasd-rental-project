import type { FC } from 'react';
import { useToolStore } from '../../../../../../../zustand';
import { Spin } from 'antd';
import DataBox from '../teplate/DataBox';
import useViewTool from '../../../../../queries/tool/useViewTools';
import DataLoading from '../teplate/DataLoading';

const AllDatas: FC = () => {

    const { page } = useToolStore();
    const { data, isLoading, error } = useViewTool(page);

    console.log('all datas', data);

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

export default AllDatas;