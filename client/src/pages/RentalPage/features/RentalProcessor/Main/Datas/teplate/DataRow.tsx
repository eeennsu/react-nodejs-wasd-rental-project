import type { FC } from 'react';
import { useStepStore, useToolStore } from '../../../../../../../zustand';
import DataTemplate from './DataTemplate';
import { getToolNum } from '../../../../../utils/getToolNum';

type Props = {
    data: Tool;
}

const DataRow: FC<Props> = ({ data }) => {

    const setTool = useToolStore(state => state.setTool);
    const setIsModalOpen = useStepStore(state => state.setIsModalOpen);
    const setSystemStep = useStepStore(state => state.setSystemStep);

    const handleClick = () => {
        data.tool_name === '강의실' ? setSystemStep('CLASSROOM_DESC') : setIsModalOpen(true);
        setTool(data);
    }

    return (
        <DataTemplate onClick={handleClick}>
            <div>
                {getToolNum(data)}
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
}

export default DataRow;