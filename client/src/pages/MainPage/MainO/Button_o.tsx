import type { FC } from 'react';
import Button from '../../../components/Button';
import { RentPage } from '../..';
import { Link } from 'react-router-dom';

const Button_o: FC = () => {
  


    return (
      <div>
        
        <div className='p-50 max-w-sm mx-auto justify-center flex-1 gap-100px space-x-8'>
          <div className='flex items-center w-100 h-60 justify-center gap-50px'>           
            <Button bgColor='02'>
            <Link to={'/rent'}>
              기자재 대여 바로가기
            </Link>
            </Button>
            <Button bgColor='02'>
            <Link to={'/rent'}>
              강의실 대여 바로가기
              </Link>
            </Button>
          
          </div>
        </div>
      </div>
      
    );
};

export default Button_o;