import type { FC } from 'react';
import MyDetails from './MyDetails';
import MyRentals from './MyRentals';

const Side: FC = () => {


    
    return (
        <div className='flex flex-col items-center h-full justify-evenly'>
            <h3>
                나의 대여 목록
            </h3>
            <MyRentals />
            <MyDetails />  
        </div>
    );
};

export default Side;