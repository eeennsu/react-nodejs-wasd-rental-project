import type { DetailedHTMLProps, FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

type Props = DetailedHTMLProps<HtmlHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>

const TrTemplate: FC<PropsWithChildren<Props>> = ({ children, ...trProps }) => {

    return (
        <tr {...trProps} className='flex items-center justify-center text-sm font-semibold text-black transition-colors cursor-pointer h-9 bg-02 rounded-[4px]'> 
            {children}
        </tr>
    );
};

export default TrTemplate;