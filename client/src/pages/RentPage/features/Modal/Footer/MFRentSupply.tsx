import type { FC } from 'react';
import Button from '../../../../../components/Button';
import { message } from 'antd';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import { initModalStep } from '../../../utils/modal';

const MFRentSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen ,setModalStep } = useModalStore();

    const handleRentSupply = () => {
        message.success('대여가 완료되었습니다');
        setIsModalOpen(false);
        initModalStep(activeTab, setModalStep);      
    }

    return (
        <footer role='modal-footer' className='flex justify-end'>
            <Button onClick={handleRentSupply}>
                대여 하기
            </Button>    
        </footer>
    );
};

export default MFRentSupply;