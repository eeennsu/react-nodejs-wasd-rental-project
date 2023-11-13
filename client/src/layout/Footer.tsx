import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import logo2 from '../assets/images/logo2.png';

const Footer: FC = () => {
    
    const { pathname } = useLocation();
  
    if (pathname !== '/main') return;
    
    // 이미지 60? 40?
    return (
        <footer className='bg-[#d9d9d9] h-20 flex items-center'>
            <div className='flex justify-end w-full mx-auto max-w-7xl'>
                <img src={logo2} className='w-[60px] h-[60px] rounded-full'/>       
            </div>           
        </footer>
    );
};

export default Footer;