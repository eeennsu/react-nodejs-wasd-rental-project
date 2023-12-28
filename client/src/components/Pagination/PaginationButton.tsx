import type { FC, PropsWithChildren } from 'react';

type Props = {
    curPage: number;
};

const PGButton: FC<PropsWithChildren<Props>> = ({ curPage, children}) => {

    return (
        <button className={`w-6 h-8 text-white ${curPage === children ? 'bg-01' : 'bg-02'} rounded-sm2 font-[500] hover:brightness-110`} >
            {children}
        </button>
    );
}

export default PGButton;