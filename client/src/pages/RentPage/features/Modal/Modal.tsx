import { useEffect, type FC } from 'react';
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


    // test
    return (
        <AntdModal         
            footer={getModalFooter(modalStep)}
            width={1000}
            centered            
            open={isModalOpen}
            onCancel={handleModalClose} 
        >
            {
                getModalContent(modalStep)
            }         
        </AntdModal>
    );
};

export default Modal;