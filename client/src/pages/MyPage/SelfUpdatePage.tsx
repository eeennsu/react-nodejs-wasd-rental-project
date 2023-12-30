import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../zustand';
import MainLogo from '../../components/MainLogo';
import Button from '../../components/Button';

const SelfUpdatePage: FC = () => {

    const userId = useUserStore(state => state.user?.user_id);

    return (
        <div className='flex flex-col items-center justify-center flex-1 gap-6 mb-28'>
            <MainLogo />
            <div className='flex gap-4'>
                <div className='flex flex-col gap-12 bg-[#D5E1F2] py-16 px-28 rounded-md'>
                    <div className='text-xl font-bold'>
                        가입 정보 수정
                    </div>
                    <div className='flex justify-center'>
                        <Button bgColor='01' className='text-sm'>
                            <Link to={`/my-page/update/sign/${userId}`}>
                                수정하러 가기
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col gap-12 bg-[#D5E1F2] py-16 px-28  rounded-md'>
                    <div className='text-xl font-bold text0cee'>
                        개인 정보 수정
                    </div>
                    <div className='flex justify-center'>
                        <Button bgColor='01'>
                            <Link to={`/my-page/update/private/${userId}`}>
                                수정하러 가기
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelfUpdatePage;