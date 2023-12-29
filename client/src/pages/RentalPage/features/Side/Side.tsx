import type { FC } from 'react';
import { useUserStore } from '../../../../zustand';
import useMyLateRentalList from '../../queries/rental/useMyLateRentalList';
import useMyRentalList from '../../queries/rental/useMyRentalList';
import MyRentalInfo from './MyRentalInfo';

const Side: FC = () => {

    const user_id = useUserStore(state => state.user?.user_id);
    const curRental = useMyRentalList(user_id!);
    const lateRental = useMyLateRentalList(user_id!);

    return (
        <div className='flex flex-col items-center gap-10 pb-10 lg:pb-0 h-max'>
            <section className='items-center justify-center hidden w-40 h-40 rounded-full max-3xl:w-36 max-3xl:h-36 lg:flex bg-03 shadow-left'>
                <h2 className='font-[800] max-3xl:text-sm'>
                    나의 대여 목록
                </h2>
            </section>  
            <section className='flex gap-8 lg:flex-col'>
                <MyRentalInfo title='대여 현황' rentalInfos={curRental.data?.result} isLoading={curRental.isLoading} error={curRental.error instanceof Error}  />
                <MyRentalInfo title='연체 현황' rentalInfos={lateRental.data?.result} isLoading={lateRental.isLoading} error={lateRental.error instanceof Error} /> 
            </section>            
        </div>
    );
}

export default Side;