import type { FC } from 'react';
import Button from '../../../../../components/Button';
import { message } from 'antd';
import { useTabsStore } from '../../../../../zustand';
import useModalStore from '../../../../../zustand/suppliesStore/useStepStore';

const MFRepairSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen, setSystemStep, text, setText  } = useModalStore();

    const handleRepairRequest = () => {
        try {
            // API 호출

            //
            message.success('수리 요청이 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            setIsModalOpen(false);
            // initModalStep(activeTab, setSystemStep);  
            setText('');
        }
    }

    return (
        <footer role='modal-footer' className='flex justify-end gap-3'>
            <Button onClick={handleRepairRequest} bgColor='01'>
                요청 하기
            </Button>    
        </footer>
    );
};

export default MFRepairSupply;