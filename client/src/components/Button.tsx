import type { FC, PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import Spinner from './Spinner';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    isLoading?: boolean;
    customColor?: CustomColor
};

const Button: FC<PropsWithChildren<Props>> = ({ children, className, isLoading, customColor ='blue', ...btnProps }) => {

    const blueStyle = `${isLoading ? 'bg-blue-400/40': 'bg-blue-500 '} ${!isLoading && ' hover:bg-blue-400 active:bg-blue-600 '}`;
    const redStyle = `${isLoading ? 'bg-red-400/40' : 'bg-red-400'} ${!isLoading && ' hover:bg-red-300 active:bg-red-500 '}`;

    const bgStyle = customColor === 'blue' ? blueStyle : customColor === 'red' ? redStyle : '';
    
    return (
        <button {...btnProps} className={`flex items-center justify-center w-24 px-4 py-2 text-white transition-colors border-white rounded-[6px] shadow-sm whitespace-nowrap ${bgStyle}` + className} disabled={isLoading}>
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