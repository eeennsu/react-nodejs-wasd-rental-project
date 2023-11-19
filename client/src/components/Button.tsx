import type { FC, PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import Spinner from './Spinner';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    isLoading?: boolean;
    bgColor: '01' | '02';
};

const Button: FC<PropsWithChildren<Props>> = ({ children, className, bgColor, isLoading, disabled, ...btnProps }) => {
    
    const _bgColor = !isLoading ? bgColor === '01' ? `bg-01 ${!disabled && 'hover:bg-01-hover active:bg-01-active'}` : `bg-02 ${!disabled && 'hover:bg-02-hover active:bg-02-active'}` : bgColor === '01' ? 'bg-01' : 'bg-02' ;

    return (
        <button {...btnProps} className={`min-w-[103px] h-9 ${_bgColor} text-white rounded-sm2 transition-colors text-sm ${disabled || isLoading && 'bg-01/75'} ` + className} disabled={isLoading || disabled}>
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

export default Button;