import type { FC, PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import Spinner from './Spinner';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    isLoading?: boolean;
    bgColor: '01' | '02';
};

const Button: FC<PropsWithChildren<Props>> = ({ children, className, bgColor, isLoading, ...btnProps }) => {
    
    const _bgColor = bgColor === '01' ? 'bg-01 hover:bg-01-hover active:bg-01-active' : 'bg-02 hover:bg-02-hover active:bg-02-active';

    return (
        <button {...btnProps} className={`min-w-[103px] h-9 ${_bgColor} text-white rounded-sm2 transition-colors text-sm ` + className} disabled={isLoading}>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    children
                )
            }
        </button>
    );
}

export default Button