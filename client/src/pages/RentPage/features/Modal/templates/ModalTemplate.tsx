import type { FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const ModalTemplate: FC<PropsWithChildren<Props>> = ({ children, className }) => {

    return (
        <section className={`md:h-[480px] ${className}`}>
            {children}
        </section>
    );
};

export default ModalTemplate;