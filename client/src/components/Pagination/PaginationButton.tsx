import type { FC, PropsWithChildren } from 'react';

type Props = {
    curPage: number;
    color?: string;
};

const PGButton: FC<PropsWithChildren<Props>> = ({ curPage, children, color }) => {

    return (
        <button className={`w-6 h-8 text-white ${curPage === children ? 'bg-01' : color ? color : 'bg-02'} rounded-sm2 font-[500] hover:brightness-110`} >
            {children}
        </button>
    );
}

export default PGButton;