import type { FC } from 'react';
import Button from '../../../../../components/Button';
import { message } from 'antd';
import { initModalStep } from '../../../utils/modal';
import { useTabsStore } from '../../../../../zustand';
import useModalStore from '../../../../../zustand/suppliesStore/useModalStore';

const MFRepairSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen ,setModalStep } = useModalStore();

    const handleRepairRequest = () => {
        message.success('수리 요청이 완료되었습니다');
        setIsModalOpen(false);
        initModalStep(activeTab, setModalStep);      
    }

    return (
        <footer role='modal-footer' className='flex justify-end gap-3'>
            <Button onClick={handleRepairRequest}>
                요청 하기
            </Button>    
        </footer>
    );
};

export default MFRepairSupply;