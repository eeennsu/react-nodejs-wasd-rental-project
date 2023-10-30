import type { FC } from 'react';
import { Modal as AntdModal, ModalProps } from 'antd';
import { useDetailSupplyStore } from '../../../../zustand';
import DetailSupply from '../RentalProcessor/Supplies/Table/DetailSupply';



const Modal: FC = () => {

    const { isModalOpen, setIsModalOpen } = useDetailSupplyStore();

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const footer = (
        <footer role='modal-footer' className='flex justify-end gap-3 '>
            <button className='bg-green-300'>대여하기</button>
            <button onClick={handleModalClose} className='bg-green-300'>종료</button>
        </footer>
    )

    return (
        <AntdModal         
            footer={footer}
            width={1000}
            centered
            open={isModalOpen}
            onCancel={handleModalClose} 
        >
            <DetailSupply />         
        </AntdModal>
    );
};

export default Modal;