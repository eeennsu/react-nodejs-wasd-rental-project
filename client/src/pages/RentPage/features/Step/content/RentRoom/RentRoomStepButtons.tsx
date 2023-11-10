import type { FC } from 'react';
import Button from '../../../../../../components/Button';
import { message } from 'antd';
import { useTabsStore, useStepStore } from '../../../../../../zustand';

const RentRoomStepButtons: FC = () => {

    const { setActiveTab } = useTabsStore();
    const { 
        text, setText, 
        selectedRoom, setSelectedRoom, 
        rentDate, setRentDate,
        returnDate, setReturnDate,
        setSystemStep 
    } = useStepStore();

    const handleDescRoomStep = () => {
        setSystemStep('LR_DESC');
    }

    const handleRentRoomRequest = () => {
        if (!selectedRoom) {
            message.error('강의실이 선택되지 않았습니다.');
        }

        if (text.length <= 4) {
            message.warning('수리 사유를 5자 이상 입력해주세요.');

            return;
        }

        try {
            // API 호출

            //
            message.success('강의실 대여가 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            handleBack();
        }
    }

    const handleBack = () => {
        setSystemStep('INIT');
        setActiveTab(1);
        text.length >= 1 && setText('');
        
        rentDate && setRentDate(null);
        returnDate && setReturnDate(null);
    }

    return (
        <footer className='flex justify-end gap-3 p-4 bg-04'>
            <Button onClick={handleDescRoomStep} bgColor='02'>
                돌아 가기
            </Button> 
            <Button onClick={handleRentRoomRequest} bgColor='01'>
                대여 완료
            </Button>           
        </footer>
    );
};

export default RentRoomStepButtons;