import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useStoreController from '../../hooks/commons/useStoreController';

const ExNavMenu: FC = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { setAllStoreInit } = useStoreController();

    const handleExNav = () => {
        if (pathname === '/rental') {
            setAllStoreInit();   
        }
     
        navigate('/');      
    }

    return (
        <button className='absolute hidden pl-4 text-white md:block' onClick={handleExNav}>
            임시 내비게이션 페이지 가기
        </button>
    );
};

export default ExNavMenu;