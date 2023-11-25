import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import ListItem, { Skeleton } from './ListItem';

type Props = {
    title: string;
    rentalInfos?: ExistCurRental[] | string;
    isLoading: boolean;
    error: Error | unknown;
}

const MIN_LENGTH = 7;

const MyRentalInfo: FC<Props> = ({ title, rentalInfos, isLoading, error }) => {
    
    const defaultItems = Array.from({ length: MIN_LENGTH }, () => '');

    const minItems = useMemo(() => {
        if (rentalInfos && Array.isArray(rentalInfos)) {
            const items = rentalInfos as ExistCurRental[];

            if (items.length <= MIN_LENGTH) {
                return defaultItems.map((_, i) => items[i]);
            } else {
                return rentalInfos;
            }
        }

        return undefined;
    }, [rentalInfos, defaultItems]);

    return (
        <div className='flex flex-col items-center shadow-left w-[130px] md:w-[150px]'>
            <h2 className='w-full flex items-center justify-center h-[29px] text-sm font-semibold rounded-t-[4px] text-white bg-01'>
                {title}
            </h2>
            {
                error ? (
                    <EmptyContainer>
                        <DangerError />
                    </EmptyContainer>
                ) : (
                    isLoading ? (
                        <EmptyContainer>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </EmptyContainer>
                    ) : (
                        minItems ? (
                            <RentalList>
                                {
                                    minItems?.map((rental, i) => (
                                        <ListItem key={i} item={rental} />
                                    ))
                                }
                            </RentalList>
                        ) : (
                            <RentalList>
                                {
                                    Array.from({ length: 7 }, () => '').map((_, i) => (
                                        <ListItem key={i} />
                                    ))
                                }
                            </RentalList>                   
                        )
                    )
                )
            }
        </div>
    );
};

export default MyRentalInfo;

const RentalList: FC<PropsWithChildren> = ({ children }) => {
    
    return (
        <ul className='w-full overflow-x-auto overflow-y-auto list-none list-inside text whitespace-nowrap h-[203px] my-scr'>
            {children}
        </ul>
    );
}

const EmptyContainer: FC<PropsWithChildren> = ({ children }) => {

    return (
        <ul className='h-[203px] flex flex-col bg-03 w-full pt-2'>
            {children}
        </ul>
    )
}

const DangerError: FC = () => {

    return (
        <div className='flex flex-col items-center justify-center h-full px-2 py-2 text-xs opacity-75' role="alert">
            <div className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-t">
                Danger
            </div>
            <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b ">
                <p>에러가 발생하였습니다. 관리자에게 문의해 주세요.</p>
            </div>
        </div>
    );
}