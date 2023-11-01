import type { FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const ModalTemplate: FC<PropsWithChildren<Props>> = ({ children, className }) => {

    return (
        <main className={`px-10 md:h-[580px] ${className}`}>
            {children}
        </main>
    );
};

export default ModalTemplate;