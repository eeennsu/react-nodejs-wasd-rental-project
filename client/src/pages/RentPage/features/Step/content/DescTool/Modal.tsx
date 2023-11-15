import type { FC } from 'react';
import { Modal as AntdModal } from 'antd';
import { useStepStore, useTabsStore } from '../../../../../../zustand';

import DescTool from './DescTool';

const Modal: FC = () => {

    const { 
        isModalOpen, setIsModalOpen,
        isProcessLoading,
    } = useStepStore();

    const handleModalClose = () => {        
        if (isProcessLoading) return;

        setIsModalOpen(false);      
    }

    return (
        <AntdModal        
            centered            
            open={isModalOpen}
            onCancel={handleModalClose} 
            width={800}
            footer={null}
        >
            <DescTool />
        </AntdModal>
    );
};

export default Modal;