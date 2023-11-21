import type { FC } from 'react';
import { useStepStore, useToolStore } from '../../../../../../../zustand';
import DataTemplate from './DataTemplate';

type Props = {
    toolData: Tool;
}

const regex = /\d+번/; // 숫자(\d)가 하나 이상 있는 "숫자번" 패턴

const DataRow: FC<Props> = ({ toolData }) => {

    const { setIsModalOpen } = useStepStore();
    const { setTool } = useToolStore();

    const handleClick = () => {
        setTool(toolData);

        setIsModalOpen(true);
    }

    const match = toolData.tool_name !== 'x' && toolData.tool_content.match(regex);

    return (
        <DataTemplate onClick={handleClick}>
            <div>
                {toolData.tool_code !== 'x' ? `${match}` : toolData.tool_id}
            </div>
            <div className='flex gap-1 mx-1'>               
                {' / '}
                {toolData.tool_name}            
                {' / '}
            </div>
            <div>
                {toolData.tool_state}
            </div>
        </DataTemplate>
    );
};

export default DataRow;