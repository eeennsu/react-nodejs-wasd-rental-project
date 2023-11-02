import type { DetailedHTMLProps, FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

type Props = DetailedHTMLProps<HtmlHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>

const TrTemplate: FC<PropsWithChildren<Props>> = ({ children, ...trProps }) => {

    return (
        <tr {...trProps} className='border-b-[1px] border-b-slate-400 hover:bg-pink-100 transition-colors cursor-pointer'> 
            {children}
        </tr>
    );
};

export default TrTemplate;