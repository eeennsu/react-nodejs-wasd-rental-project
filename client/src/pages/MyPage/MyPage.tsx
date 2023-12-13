import type { FC } from 'react';
import ModifyInformation from './ModifyInformation';
import Request from './Request';
import RentalListMy from './RentalListMy/RentalListMy';
import RentalListCss from './RentalListMy/RentalListCss';
import PersonalInformation from './PersonalInformation';
import RentalListBody from './RentalListMy/RentalListBody';

const MyPage: FC = () => {

    return (
        <div>
            <PersonalInformation/>
            
            <RentalListBody/>

            <Request/>
 
            

      
        </div>
    );
};

export default MyPage;