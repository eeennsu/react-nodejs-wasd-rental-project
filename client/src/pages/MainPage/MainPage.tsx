import type { FC } from 'react';
import Button_o from './MainO/Button_o';
import Openchat from './MainO/Openchat';

const MainPage: FC = () => {
    
    return (
      <div >
        <div className='w-120 h-80 bg-03'>
          <Button_o/>
          <Openchat/>  
        </div>
      </div>
    );
};

export default MainPage;