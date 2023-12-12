import type { FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const Template: FC<PropsWithChildren<Props>> = ({ className, children }) => {

    return (
        <section className={`flex flex-col w-full ${className}`}>
            {children}
        </section>
    );
};

export default Template;