import type { FC } from 'react';
import Button from '../../../../../../components/Button';
import useStoreController from '../../../../../../hooks/commons/useStoreController';
import { message } from 'antd';
import { useStepStore, useTimeStore, useUserStore } from '../../../../../../zustand';
import { shallow } from'zustand/shallow';
import { SessionUserInfo } from '../../../../../../zustand/userStore/types';

const RentalRoomStepButtons: FC = () => {

    const { 
        rentalReson, setText, 
        selectedRoom, setSystemStep 
    } = useStepStore(state => ({
        rentalReson: state.text, setText: state.setText,
        selectedRoom: state.selectedRoom, setSystemStep: state.setSystemStep
    }), shallow);

    const {
        rentDate,
        firstSelectHour, firstSelectMin,
        lastSelectHour, lastSelectMin,
        resetTimes, setTimeBtnsResetTrigger
    } = useTimeStore(state => ({
        rentDate: state.rentalDate,
        firstSelectHour: state.firstSelectHour, firstSelectMin: state.firstSelectMin, 
        lastSelectHour: state.lastSelectHour, lastSelectMin: state.lastSelectMin,
        resetTimes: state.resetTimes,
        setTimeBtnsResetTrigger: state.setTimeBtnsResetTrigger
    }), shallow);

    const { user_id, department_id } = useUserStore(state => state.user) as SessionUserInfo;

    const { setStepInit, setDateInit } = useStoreController();

    const handleDescRoomStep = () => {
        setSystemStep('CLASSROOM_DESC');    
        rentalReson.length >= 1 && setText('');     
        resetTimes();
    }

    const handleResetTimes = () => {
        resetTimes();
        setTimeBtnsResetTrigger();
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

        if (!firstSelectHour || firstSelectMin === null || firstSelectMin === undefined) {
            message.warning('대여를 시작할 시간을 지정해주세요.');
        
            return;
        }

        if (!lastSelectHour || lastSelectMin === null || lastSelectMin === undefined) {
            message.warning('대여를 마감할 시간을 입력해주세요.');

            return;
        }

        if (rentalReson.length  <= 0) {
            message.warning('수리 사유를 입력해주세요.');

            return;
        }

        try {
            console.log('유저 아이디 - ', user_id);
            console.log('디파트먼트 아이디 - ', department_id);
            console.log('선택된 강의실 - ', selectedRoom);
            console.log('대여 사유 - ', rentalReson);
            console.log('대여 날짜 - ', rentDate);
            
            message.success('강의실 대여가 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            handleInit();
        }
    }

    const handleInit = () => {
        setStepInit();
        setDateInit();
        resetTimes();
    }

    return (
        <footer className='flex items-center justify-between p-4 bg-04'>
            <div>
                <Button onClick={handleResetTimes} bgColor='01'>
                    다시 선택
                </Button>     
            </div>
            <div className='flex gap-3'>
                <Button onClick={handleDescRoomStep} bgColor='02'>
                    돌아가기
                </Button> 
                <Button onClick={handleRentRoomRequest} bgColor='01'>
                    대여 완료
                </Button>       
            </div>        
        </footer>
    );
};

export default RentalRoomStepButtons;