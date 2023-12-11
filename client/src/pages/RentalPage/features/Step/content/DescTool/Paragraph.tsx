import type { FC } from 'react';

const Paragraph: FC<{ title: string; text?: string }> = ({ title, text }) => {
    
    return (
        <p className='flex w-full gap-2'>
            <span className='w-1/3 font-bold '>
                {title}
            </span>  
            <span className='w-2/3'>
                {text}
            </span>
        </p>
    );
}

export default Paragraph;