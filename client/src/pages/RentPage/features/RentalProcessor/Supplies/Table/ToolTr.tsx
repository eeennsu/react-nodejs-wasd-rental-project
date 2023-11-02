import type { FC } from 'react';
import { useModalStore, useTabsStore } from '../../../../../../zustand';
import { initModalStep } from '../../../../utils/modal';
import { getToolsAvailability } from '../../../../utils/tables';

type Props = {
    toolData: Tool;
}

const ToolTr: FC<Props> = ({ toolData }) => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen, setDetailTool, setModalStep } = useModalStore();

    const handleClick = () => {
        initModalStep(activeTab, setModalStep);

        setDetailTool(toolData);

        setIsModalOpen(true);
    }

    return (
        <tr className='border-b-[1px] border-b-slate-400 hover:bg-pink-100 transition-colors cursor-pointer' onClick={handleClick}>
            <td>
                {toolData.tool_id}
            </td>
            <td>
                {toolData.tool_code}
            </td>
            <td>
                {toolData.tool_name}
            </td>
            <td>
                {toolData.tool_purchase_division}
            </td>
            <td>
                {getToolsAvailability(toolData)}
            </td>
        </tr>
    );
};

export default ToolTr;