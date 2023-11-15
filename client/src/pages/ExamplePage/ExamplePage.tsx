import type { FC } from 'react';
import Button from '../../components/Button';

const ExamplePage: FC = () => {



    return (
        <div className='w-full'>
            <div className='fixed w-full top-28 bg-03 h-2/5 -z-10'>

            </div>
            <div className='flex flex-col items-center justify-center gap-4 mt-[70px]'>
                <div className='py-3 px-28 bg-02 h-2/5'>
                    기자재 대여 바로 가기 &gt;
                </div>
                <div className='py-3 px-28 bg-02'>
                    강의실 대여 바로 가기 &gt;
                </div>
            </div>
            <div className='max-w-4xl mx-auto h-3/5'>
                <div className='mt-12 bg-01 h-[35%]'>
     
                </div>
                <div className='flex justify-center w-full gap-4 mt-6 h-[65%]'>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-10 h-5/6 bg-02'>
                        <h3>
                            실습 조교 오픈 채팅방
                        </h3>
                        <div>
                            <Button bgColor='01'>
                                바로 가기 &gt;
                            </Button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-10 h-5/6 bg-02'>
                        <h3>
                            행정 조교 오픈 채팅방
                        </h3>
                        <div>
                            <Button bgColor='01'>
                                바로 가기 &gt;
                            </Button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    );
};

export default ExamplePage;