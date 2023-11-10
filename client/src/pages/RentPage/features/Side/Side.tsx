import type { FC } from 'react';
import MyDetails from './MyDetails';
import { useState, useEffect } from 'react';


const Side: FC = () => {

    const minLength = 7;
    const [myRentals, setMyRentals] = useState<string[]>(Array.from({ length: minLength }));
    const [myStatus, setMyStatus] = useState<string[]>(Array.from({ length: minLength }));

    useEffect(() => {
        const fetchedRentals = new Array(4).fill('오큘러스');           // api로 변경
        const fetchedStatuses = new Array(10).fill('타블렛');            // api로 변경

        const rentalsLength = Math.max(minLength, fetchedRentals.length);
        const statusLength = Math.max(minLength, fetchedStatuses.length);
        
        setMyRentals(Array.from({ length: rentalsLength }, () => '').map((_, i) => fetchedRentals[i]));
        setMyStatus(Array.from({ length: statusLength }, () => '').map((_, i) => fetchedStatuses[i]));
    }, []);

    return (
        <div className='flex flex-col items-center gap-10 mb-10 h-max'>
            <div className='flex items-center justify-center w-40 h-40 rounded-full bg-03 shadow-left'>
                <h2 className='font-[800]'>
                    나의 대여 목록
                </h2>
            </div>  
            <div className='flex flex-col gap-5 '>
                <MyDetails title='대여 현황' datas={myRentals} />
                <MyDetails title='연체 현황' datas={myStatus} /> 
            </div>            
        </div>
    );
};

export default Side;