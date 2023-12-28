import type { FC } from 'react';
import { MainLayout, OtherLayout } from '.';
import Header from './components/Header';

type Props = {
    type: 'main' | 'other'
    isLogo?: boolean;
}

const RootLayout: FC<Props> = ({ type, isLogo = true }) => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />     
            {
                type === 'main' ? (
                    <MainLayout />
                ) : type === 'other' ? (
                    <OtherLayout isLogo={isLogo} />
                ) : null
            }             
        </div>
    );
}

export default RootLayout;