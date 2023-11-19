import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    curPage: number;
};

const PGButton: FC<PropsWithChildren<Props>> = ({ curPage, children, ...btnProps }) => {

    return (
        <button {...btnProps} className={`w-6 h-8 text-white ${curPage === children ? 'bg-01' : 'bg-02'} rounded-sm2 font-[500] hover:brightness-110`} >
            {children}
        </button>
    );
};

export default PGButton;