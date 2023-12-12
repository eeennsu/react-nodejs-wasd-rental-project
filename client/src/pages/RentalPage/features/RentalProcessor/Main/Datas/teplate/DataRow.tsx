import type { FC } from 'react';
import { useStepStore, useToolStore } from '../../../../../../../zustand';
import DataTemplate from './DataTemplate';

type Props = {
    data: Tool;
}

const regex = /\d+번/;

const DataRow: FC<Props> = ({ data }) => {

    const setTool = useToolStore(state => state.setTool);
    const setIsModalOpen = useStepStore(state => state.setIsModalOpen);
    const setSystemStep = useStepStore(state => state.setSystemStep);

    const handleClick = () => {
        data.tool_name === '강의실' ? setSystemStep('CLASSROOM_DESC') : setIsModalOpen(true);
        setTool(data);
    }

    const match = data.tool_name !== '강의실' && data.tool_content.match(regex);

    return (
        <DataTemplate onClick={handleClick}>
            <div>
                {data.tool_code !== 'x' ? `${match}` : data.tool_id}
            </div>
            <div className='flex gap-1 mx-1'>               
                {' / '}
                {data.tool_name}            
                {' / '}
            </div>
            <div>
                {data.tool_state}
            </div>
        </DataTemplate>
    );
};

export default DataRow;