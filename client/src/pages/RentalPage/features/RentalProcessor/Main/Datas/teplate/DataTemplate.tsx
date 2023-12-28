import type { FC, PropsWithChildren } from 'react';

type Props = {
    onClick: () => void;
}

const DataTemplate: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {

    return (
        <li className='flex items-center justify-center max-3xl:h-[36px] h-[38px] text-sm font-semibold text-black transition-colors cursor-pointer bg-02 hover:bg-slate-300 active:bg-slate-400 rounded-sm2' onClick={onClick}> 
            {children}
        </li>
    );
}

export default DataTemplate;