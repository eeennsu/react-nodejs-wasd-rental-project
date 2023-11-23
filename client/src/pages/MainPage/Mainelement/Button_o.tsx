import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Button_o: FC = () => {


    return (
        <div className='w-full'>
          <div className='max-w-4xl mx-auto'>
            
            <div className='flex flex-col items-center justify-center gap-4 mt-[40px]'>
                <div className='py-3 px-28 bg-02'>
                  <Link to = {'/rental'}>
                  기자재 대여 바로 가기 &gt;
                  </Link>
                </div>
                <div className='py-3 px-28 bg-02'>
                  <Link to = {'/rental'}>
                    강의실 대여 바로 가기 &gt;
                  </Link>
                </div>
            </div>
          </div>           
        </div>
    );
};

export default Button_o;