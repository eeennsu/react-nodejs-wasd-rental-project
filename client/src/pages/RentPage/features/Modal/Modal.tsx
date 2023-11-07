import type { FC } from 'react';
import { Modal as AntdModal } from 'antd';
import { useModalStore, useTabsStore } from '../../../../zustand';
import { getModalContent, getModalFooter, initModalStep } from '../../utils/modal';

const Modal: FC = () => {

    const { activeTab } = useTabsStore();
    const { 
        isModalOpen, setIsModalOpen,
        isProcessLoading,
        modalStep, setModalStep
    } = useModalStore();

    const handleModalClose = () => {        
        if (isProcessLoading) return;

        initModalStep(activeTab, setModalStep);
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
            {
                getModalContent(modalStep)
            }         
        </AntdModal>
    );
};

export default Modal;