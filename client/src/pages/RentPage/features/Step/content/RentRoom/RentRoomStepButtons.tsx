import type { FC } from 'react';
import Button from '../../../../../../components/Button';
import { message } from 'antd';
import { useTabsStore, useStepStore, useTimeStore } from '../../../../../../zustand';

const RentRoomStepButtons: FC = () => {

    const { setActiveTab } = useTabsStore();
    const { 
        text, setText, 
        selectedRoom, 
        setSystemStep 
    } = useStepStore();

    const {
        rentDate, setRentDate,
        firstSelectHour, firstSelectMin,
        lastSelectHour, lastSelectMin,
        resetTimes
    } = useTimeStore();

    const handleDescRoomStep = () => {
        setSystemStep('LR_DESC');    
        handleBack();
    }

    const handleRentRoomRequest = () => {
        if (!selectedRoom) {
            message.error('강의실이 선택되지 않았습니다.');

            return;
        }

        if (!rentDate) {
            message.warning('대여할 날짜를 지정해주세요.');

            return;
        }

        if (!firstSelectHour || !firstSelectMin) {
            message.warning('대여를 시작할 시간을 지정해주세요.');
        
            return;
        }

        if (!lastSelectHour || !lastSelectMin) {
            message.warning('대여를 마감할 시간을 입력해주세요.');

            return;
        }

        if (text.length  <= 0) {
            message.warning('수리 사유를 입력해주세요.');

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
            handleInit();
        }
    }

    const handleInit = () => {
        setSystemStep('INIT');
        setActiveTab(1);
        handleBack();
    }

    const handleBack = () => {
        text.length >= 1 && setText('');        
        rentDate && setRentDate(null);
        resetTimes();
    }

    return (
        <footer className='flex justify-end gap-3 p-4 bg-04'>
            <Button onClick={handleDescRoomStep} bgColor='02'>
                돌아가기
            </Button> 
            <Button onClick={handleRentRoomRequest} bgColor='01'>
                대여 완료
            </Button>           
        </footer>
    );
};

export default RentRoomStepButtons;