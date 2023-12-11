import type { FC } from 'react';
import { MainLayout, OtherLayout } from '.';
import Header from './components/Header';

type Props = {
    type: 'main' | 'other'
}

const RootLayout: FC<Props> = ({ type }) => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />     
            {
                type === 'main' ? (
                    <MainLayout />
                ) : type === 'other' ? (
                    <OtherLayout />
                ) : null
            }             
        </div>
    );
};

export default RootLayout;