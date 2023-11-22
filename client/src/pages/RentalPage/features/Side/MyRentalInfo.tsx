import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import ListItem, { Skeleton } from './ListItem';
import Spinner from '../../../../components/Spinner';

type Props = {
    title: string;
    data?: ResMyRentalList | ResMyLateRentalList;
    isLoading: boolean;
    error: Error | unknown;
}

const MyRentalInfo: FC<Props> = ({ title, data, isLoading, error }) => {
    
    const minLength = 7;
    const defaultItems = Array.from({ length: minLength }, () => '');

    const minItems = useMemo(() => {
        if (data && Array.isArray(data)) {
            const items = data as ExistCurRental[];

            if (items.length <= minLength) {
                return defaultItems.map((_, i) => items[i]);
            } else {
                return data;
            }
        }

        return undefined;
    }, [data, defaultItems]);

    return (
        <div className='flex flex-col items-center shadow-left w-[130px] md:w-[150px]'>
            <h2 className='w-full flex items-center justify-center h-[29px] text-sm font-semibold rounded-t-[4px] text-white bg-01'>
                {title}
            </h2>
            {
                isLoading ? (
                    <ul className='h-[203px] flex flex-col bg-03 w-full pt-2'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </ul>
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
