import type { FC } from 'react';
import { useStepStore } from '../../../../../../../zustand';
import DataTemplate from './DataTemplate';

type Props = {
    toolData: Tool;
}

const DataBox: FC<Props> = ({ toolData }) => {

    const { setIsModalOpen, setDetailTool, setSystemStep } = useStepStore();

    const handleClick = () => {
        setDetailTool(toolData);

        setIsModalOpen(true);
    }

    return (
        <DataTemplate onClick={handleClick}>
            <div>
                {toolData.tool_code !== 'x' ? `${toolData.tool_code}번` : toolData.tool_id}
            </div>
            <div className='flex gap-1 mx-1'>               
                <span>
                    /
                </span>
                    {toolData.tool_name}             
                <span>
                    /
                </span>                   
            </div>
            <div>
                {toolData.tool_state}
            </div>
        </DataTemplate>
    );
};

export default DataBox;