import type { FC } from 'react';
import Personal from './SignUp/Personal';

const SignUp: FC = () => {
    
    return (
      <div className='w-full'>
          <div className='fixed w-full top-28 bg-03 h-12'>
            <Personal/>
          </div>
      </div>
    );
};

export default SignUp;