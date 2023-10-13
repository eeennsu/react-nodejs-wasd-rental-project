import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// 웹페이지의 기본 구성이되는 최상단 부모 컴포넌트 
const Layout: FC = () => {

    // Header - 최상단 네비게이션 바 컴포넌트
    // Outlet - 페이지 경로에 들어오는 컴포넌트 ex) / 경로이면 HomePage가 들어오고, /rent 경로이면 <RentPage /> 컴포넌트가 들어옴.
    // Footer - 페이지 하단 정보글 (일단 보류)

    return (
        <div className='flex flex-col min-h-[100dvh] text-black'>
            <Header />                                  
            <div className='flex-1 bg-yellow-100'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
