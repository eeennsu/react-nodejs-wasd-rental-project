import type { FC } from 'react';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

const Openchat: FC = () => {



    return (
        <div className='w-full'>
            <div className='h-40 max-w-4xl mx-auto'>
                <div className='flex justify-center gap-10 mt-6 h-36'>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-5 bg-02'>
                        <h2 className='text-xl font-bold'>
                            실습 조교 오픈 채팅방
                        </h2>
                        <div>
                            <Button bgColor='01' className='text-xs'>
                              <Link to={'https://open.kakao.com/o/sUALlY5e'}>
                                바로 가기 &gt;
                              </Link>
                            </Button>                            
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-5 bg-02'>
                        <h2 className='text-xl font-bold'>
                            행정 조교 오픈 채팅방
                        </h2>
                        <div>
                            <Button bgColor='01' className='text-xs'>
                              <Link to={'https://open.kakao.com/o/si2T0Z4e'}>
                                바로 가기 &gt;
                              </Link>
                            </Button>
                        </div>
                    </div> 
                </div>
            </div>         
        </div>
    );
};

export default Openchat;