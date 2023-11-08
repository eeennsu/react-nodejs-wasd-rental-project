import type { FC } from 'react';
import Button from '../../../../../components/Button';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import { message } from 'antd';

const MFRentLR: FC = () => {

    const { activeTab } = useTabsStore();

    const { 
        setIsModalOpen, setSystemStep,
        setText,
        selectedRoom, setSelectedRoom 
    } = useModalStore();

    

    const handleRentLectureRoom = () => {
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
            setSelectedRoom('');
        }
    }

    return (
      <footer role='modal-footer' className='flex justify-end'>
          <Button onClick={handleRentLectureRoom} bgColor='01'>
              대여 하기
          </Button>    
      </footer>
    );
};

export default MFRentLR;