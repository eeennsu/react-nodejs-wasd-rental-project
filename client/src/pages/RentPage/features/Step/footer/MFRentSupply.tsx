import type { FC } from 'react';
import { message } from 'antd';
import { useStepStore, useTabsStore } from '../../../../../zustand';
import Button from '../../../../../components/Button';

const MFRentSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { setIsModalOpen ,setSystemStep, text, setText } = useStepStore();

    const handleRentSupply = () => {        
        try {
            // API 호출

            //
            message.success('대여가 완료되었습니다');    
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
        <footer role='modal-footer' className='flex justify-end'>
            <Button onClick={handleRentSupply} bgColor='01'>
                대여 완료
            </Button>    
        </footer>
    );
};

export default MFRentSupply;