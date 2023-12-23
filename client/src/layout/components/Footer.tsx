import type { FC } from 'react';
import logo2 from '../../assets/images/logo2.png';

const Footer: FC = () => {
    
    return (
        <footer className='bg-[#d9d9d9] h-14 flex items-center'>
            <div className='flex justify-end w-full mx-auto max-w-7xl'>
                <img src={logo2} className='w-[40px] h-[40px] rounded-full '/>       
            </div>           
        </footer>
    );
}

export default Footer;