import type { FC, ChangeEvent } from 'react';
import { useStepStore } from '../../../../../../zustand';
import RangePicker from '../dates/RangePicker';
import { Input } from 'antd';

const { TextArea } = Input;

const RentalRoomForm: FC = () => {

    const { selectedRoom, text, setText } = useStepStore();

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <section className='flex flex-col w-full gap-4 py-5 mt-5 px-9 bg-04'>
            {/* <div className='flex items-center gap-4'>
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
            /> */}
            <h3 className='mb-2 text-2xl font-semibold'>
                {selectedRoom}
            </h3>
            <div className='flex justify-start'>
                <RangePicker />
            </div>
            <div>
                시간 선택 공간 <br />
                시간 선택 공간 <br />
                시간 선택 공간 <br />
            </div>
            <div>
                <TextArea 
                    className='h-full p-3 border-2 rounded-none bg-04 border-01 placeholder:text-02/80'        
                    value={text} 
                    onChange={handleTextChange} 
                    style={{ resize: 'none' }}  
                    placeholder='대여 사유를 입력해 주세요' 
                    rows={3}
                />
            </div>         
        </section>
    );
};

export default RentalRoomForm;