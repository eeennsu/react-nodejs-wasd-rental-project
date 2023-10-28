import type { FC } from 'react';
import MyDetails from './MyDetails';
import MyRentals from './MyRentals';

const Side: FC = () => {



    return (
        <div className='flex flex-col items-center h-full justify-evenly'>
            <MyRentals />
            <MyDetails />  
        </div>
    );
};

export default Side;