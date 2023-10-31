import type { FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const ModalTemplate: FC<PropsWithChildren<Props>> = ({ children, className }) => {

    return (
        <main className={`px-10 py-6 w-full md:h-[560px] ${className}`}>
            {children}
        </main>
    );
};

export default ModalTemplate;