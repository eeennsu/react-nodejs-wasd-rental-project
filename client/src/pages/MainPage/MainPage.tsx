import type { FC } from 'react';
import Button_o from './Mainelement/Button_o';
import Openchat from './Mainelement/Openchat';
import Rentlist from './Mainelement/Rentlist';
import MainLogo from '../../components/MainLogo';

const MainPage: FC = () => {



    return (
        <div className='w-full'>
          <MainLogo />
          <div className='fixed w-full top-28 bg-03 h-2/5'>       
            <Button_o/>
            <Openchat/>
            <Rentlist/>
          </div>            
        </div>        
    );
};

export default MainPage;