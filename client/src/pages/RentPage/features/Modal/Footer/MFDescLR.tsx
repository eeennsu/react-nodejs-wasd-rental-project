import type { FC } from 'react';
import Button from '../../../../../components/Button';

const MFDescLR: FC = () => {

    const handleRentLectureRoom = () => {

    }

    return (
      <footer role='modal-footer' className='flex justify-end'>
          <Button onClick={handleRentLectureRoom}>
              대여 하기
          </Button>    
      </footer>
    );
};

export default MFDescLR;