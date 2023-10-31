import type { FC } from 'react';
import { Modal as AntdModal } from 'antd';
import { useDetailModalStore, useTabsStore } from '../../../../zustand';
import ModalFooterStep1 from './Footer/ModalFooterStep1';
import { getModalContent } from '../../utils/modal';

const Modal: FC = () => {

    const { activeTab } = useTabsStore();
    const { 
        isModalOpen, setIsModalOpen,
        isProcessLoading,
        modalStep, setModalStep
    } = useDetailModalStore();

    const handleModalClose = () => {        
        !isProcessLoading && setIsModalOpen(false);
        switch(activeTab) {
            case 0:
            case 1:
                setModalStep('SUPPLY_DESC');
                break;
            
            case 2:
                setModalStep('LR_DESC');
        }
    }
 
    return (
        <AntdModal         
            footer={<ModalFooterStep1 />}
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