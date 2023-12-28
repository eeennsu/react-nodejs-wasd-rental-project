import type { FC } from 'react';
import { Modal as AntdModal } from 'antd';
import { useStepStore } from '../../../../../../zustand';
import { shallow } from 'zustand/shallow';
import DescTool from './DescTool';

const Modal: FC = () => {

    const { isModalOpen, setIsModalOpen } = useStepStore(state => ({
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
    }), shallow);

    const handleModalClose = () => {        
        setIsModalOpen(false);      
    }

    return (
        <AntdModal        
            className='drop-shadow-2xl'
            open={isModalOpen}
            onCancel={handleModalClose} 
            width={800}
            footer={null}
            centered            
        >
           <DescTool />  
        </AntdModal>
    );
}

export default Modal;