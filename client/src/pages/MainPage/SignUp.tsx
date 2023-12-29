import type { FC } from 'react';
import Personal from './SignUp/Personal';
import MainLogo from '../../components/MainLogo';
import TopBar from './SignUp/TopBar';
import SignInfo from './SignUp/SignInfo';

const SignUp: FC = () => {
    
    return (
      <div className='w-full'>
        <MainLogo/>
        <div className='fixed w-full top-44 bg-03 h-48 -z-10'>
        <TopBar/>
        <SignInfo/>
        <Personal/>
        
        </div>
            
      </div>
    );
};

export default SignUp;