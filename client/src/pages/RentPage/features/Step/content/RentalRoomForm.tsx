import type { FC, ChangeEvent } from 'react';
import { useModalStore } from '../../../../../zustand';
import RangePicker from '../../../../../components/RangePicker';
import { Input } from 'antd';

const { TextArea } = Input;

const RentalRoomForm: FC = () => {

    const { selectedRoom, text, setText } = useModalStore();

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <div className='relative w-full '>
            <div className='flex items-center gap-4'>
                <RangePicker />
                <div>
                    {selectedRoom}
                </div>
            </div>
            <div className='flex items-center justify-center h-14 bg-emerald-200'>
                시간 선택
            </div>
            <TextArea 
                rows={2} 
                style={{ resize: 'none' }} 
                className='p-3' 
                placeholder='대여 사유를 입력해주세요' 
                value={text} 
                onChange={handleTextChange}
            />
        </div>
    );
};

export default RentalRoomForm;