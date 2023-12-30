import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import MainLogo from '../../../components/MainLogo';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

const Forgot: FC = () => {

    return (
        <section className='flex flex-col items-center justify-center flex-1 max-w-xl gap-6 mx-auto'>
            <MainLogo />
            <div className='mt-5'>
                <Button bgColor='02' className='flex items-center justify-center py-6 w-72'>
                    <Link to='/main/forgot/id'>
                        ID 찾기
                    </Link>
                </Button>
            </div>
            <div>
                <Button bgColor='02' className='flex items-center justify-center py-6 w-72'>
                    <Link to='/main/forgot/pw'>
                        비밀번호 찾기
                    </Link>
                </Button>
            </div>
        </section>
    );
}

export default Forgot;