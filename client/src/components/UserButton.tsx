import type { FC, PropsWithChildren } from 'react';

type Props = {
    onClick?: () => void;
}

const UserButton: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {

    return (
        <button className='py-1 bg-[#F2F4F7] rounded-2lg font-[500] w-[100px] text-sm hover:brightness-105 active:brightness-90' onClick={onClick}>
            {children}
        </button>
    );
};

export default UserButton;