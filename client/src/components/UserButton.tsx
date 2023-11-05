import type { FC, PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {

};

const UserButton: FC<PropsWithChildren<Props>> = ({ children, ...btnProps }) => {

    return (
        <button {...btnProps} className='px-2 py-1 bg-[#F2F4F7] rounded-2lg font-[500] w-[100px]'>
            {children}
        </button>
    );
};

export default UserButton;