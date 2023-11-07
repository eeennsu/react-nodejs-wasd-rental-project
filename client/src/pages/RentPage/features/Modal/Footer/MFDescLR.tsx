import type { FC } from 'react';
import Button from '../../../../../components/Button';

const MFDescLR: FC = () => {

    const handleRepairStep = () => {
        
    }

    return (
        <footer role='modal-footer' className='flex justify-end gap-3'>
            <Button onClick={handleRepairStep} className='invisible' bgColor='01'>
                예약 하기
            </Button>           
        </footer>
    );
};

export default MFDescLR;