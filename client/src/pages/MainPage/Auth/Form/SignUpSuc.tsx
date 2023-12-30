import type { FC } from 'react';
import { UserInfo } from '../SignUp';
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';

type Props = {
    msg: string;
}

const SignUpSuc: FC<Props> = ({ msg }) => {

    return (
        <section className='flex items-center justify-center flex-1 w-full'>
            <div className='flex flex-col items-center w-full max-w-xl gap-12 py-24 border rounded-md drop-shadow-lg bg-03 border-01'>
                <h2 className='font-bold'>
                    {msg}
                </h2>
                <div>
                    <Button bgColor='01'>
                        <Link to='/main/login' className='px-4'>
                            로그인 하러 가기
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default SignUpSuc;