import type { FC } from 'react';
import ModifyInformation from './ModifyInformation';
import RequestMy from './Request/RequestMy';
import PersonalInformation from './Information/PersonalInformation';
import RentalListBody from './RentalListMy/RentalListBody';
import MainLogo from '../../components/MainLogo';

const MyPage: FC = () => {

    return (
        <div className='flex flex-col gap-6 pb-10'>
            <MainLogo />
            <div className='flex gap-5 mt-2'>
                <PersonalInformation/>                
                <RequestMy/>     
            </div>             
            <RentalListBody />
        </div>
    );
};

export default MyPage;