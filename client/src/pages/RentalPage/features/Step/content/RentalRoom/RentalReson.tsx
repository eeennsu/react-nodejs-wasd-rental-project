import type { FC, ChangeEvent } from 'react';
import { useStepStore } from '../../../../../../zustand';
import { Input } from 'antd';

const RentalReson: FC = () => {

    const text = useStepStore(state => state.text);
    const setText = useStepStore(state => state.setText);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <Input.TextArea 
            className='h-full p-3 border-2 rounded-none bg-04 border-01 placeholder:text-02/80'        
            value={text}
            onChange={handleTextChange} 
            style={{ resize: 'none' }}  
            placeholder='대여 사유를 입력해 주세요' 
            rows={4}
        />
    );
};

export default RentalReson;