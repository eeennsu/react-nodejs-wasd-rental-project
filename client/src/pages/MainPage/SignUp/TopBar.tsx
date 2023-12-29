import type { FC } from 'react';

const TopBar: FC = () => {
    
    return (
      <div className='w-full'>
        <div className='flex mr-24 h-20 gap-36 mt-10 p-4 ml-96 max-w-4xl item-center'>
          <div className='w-60 h-20 space-y-4 rounded-lg rounded-8 bg-02 justify-center'>
            <div className=' text-white text-center '>
              가입 정보를 입력
            </div>
          </div>
          <div className='w-60 h-20 space-y-4 rounded-lg rounded-8 bg-02 justify-center'>
            <div className='text-white text-center '>
              회원 정보를 입력
            </div>
          </div>
          <div className='w-60 h-20 space-y-4 rounded-lg rounded-8 bg-02 justify-center'>
            <div className='text-white text-center '>
              가입 완료
            </div>
          </div>
            
        </div>       
      </div>
    );
};

export default TopBar;