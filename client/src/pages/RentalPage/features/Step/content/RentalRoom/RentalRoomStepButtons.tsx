import type { FC } from 'react';
import { message } from 'antd';
import { useStepStore, useTimeStore, useUserStore } from '../../../../../../zustand';
import { shallow } from'zustand/shallow';
import { SessionUserInfo } from '../../../../../../zustand/userStore/types';
import { convertToKoreanTime } from '../../../../utils/timePicker';
import { rentalClassRoom_API } from '../../../../../../api/rental/rentalApi';
import Button from '../../../../../../components/Button';
import useStoreController from '../../../../../../hooks/commons/useStoreController';
import { messages } from '../../../../constants';

const RentalRoomStepButtons: FC = () => {

    const { 
        text, setText, 
        selectedRoom, setSystemStep 
    } = useStepStore(state => ({
        text: state.text, setText: state.setText,
        selectedRoom: state.selectedRoom, setSystemStep: state.setSystemStep
    }), shallow);

    const {
        rentalDateNum, returnDateNum,
        firstSelectHour, firstSelectMin,
        lastSelectHour, lastSelectMin,
        resetTimes, setTimeBtnsResetTrigger
    } = useTimeStore(state => ({
        rentalDateNum: state.rentalDate, returnDateNum: state.returnDate,
        firstSelectHour: state.firstSelectHour, firstSelectMin: state.firstSelectMin, 
        lastSelectHour: state.lastSelectHour, lastSelectMin: state.lastSelectMin,
        resetTimes: state.resetTimes,
        setTimeBtnsResetTrigger: state.setTimeBtnsResetTrigger
    }), shallow);

    const { user_id, department_id } = useUserStore(state => state.user) as SessionUserInfo;

    const { setStepInit, setDateInit } = useStoreController();

    const handleDescRoomStep = () => {
        setSystemStep('CLASSROOM_DESC');    
        text.length >= 1 && setText('');     
        resetTimes();
    }

    const handleResetTimes = () => {
        resetTimes();
        setTimeBtnsResetTrigger();
    }
    
    const handleRentRoomRequest = async () => {
        if (!selectedRoom) {
            message.error(messages.notSelectedRoom);

            return;
        }

        if (!rentalDateNum || !returnDateNum) {
            message.warning(messages.selectRentalDate);

            return;
        }

        if (!firstSelectHour || firstSelectMin === null || firstSelectMin === undefined) {
            message.warning(messages.rentalStartTime);
        
            return;
        }

        if (!lastSelectHour || lastSelectMin === null || lastSelectMin === undefined) {
            message.warning(messages.rentalEndTime);

            return;
        }

        if (text.length <= 0) {
            message.warning(messages.textOneLength);

            return;
        }

        try {            
            const rental_date = convertToKoreanTime(rentalDateNum!, firstSelectHour!, firstSelectMin!);
            const rental_due_date = convertToKoreanTime(returnDateNum!, lastSelectHour!, lastSelectMin! + 10);

            const retnalClassroom: RentalClassroom = {
                tool_id: selectedRoom,
                user_id,
                rental_date,
                rental_due_date,
                department_id,
                rental_reason: text,
            };

            const { data } = await rentalClassRoom_API(retnalClassroom);

            if (data) {
                const rentalStart = `${firstSelectHour}시${firstSelectMin ? `${firstSelectMin}분` : ''}`;
                let rentalEnd = '';
                
                if (lastSelectMin + 10 === 60) {
                    rentalEnd = `${lastSelectHour + 1}시`;
                } else {
                    rentalEnd = `${lastSelectHour}시 ${lastSelectMin + 10}분`;
                }
                
                const rentalMessage = `${selectedRoom}를 ${rentalStart} 부터 ${rentalEnd}까지 대여하였습니다`;
                message.success(rentalMessage);
            } else {
                message.error(messages.failRental);
            }
        } catch (error) {
            console.log(error);
            message.error(messages.unknownErr);
        } finally {
            handleInit();
        }
    }

    const handleInit = () => {
        setStepInit();
        resetTimes();
        setDateInit(true);
    }

    return (
        <footer className='flex items-center justify-center gap-3 p-4 md:gap-0 md:justify-between bg-04'>
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