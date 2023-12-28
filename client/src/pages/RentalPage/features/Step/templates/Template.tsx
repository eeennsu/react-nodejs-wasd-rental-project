import type { FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const Template: FC<PropsWithChildren<Props>> = ({ className, children }) => {

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {children}
        </div>
    );
}

export default Template;