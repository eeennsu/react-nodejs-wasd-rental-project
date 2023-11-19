import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import ListItem from './ListItem';

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

        return null;
    }, [data, defaultItems]);

    return (
        <div className='flex flex-col items-center shadow-left w-[130px] md:w-[150px]'>
            <h2 className='w-full flex items-center justify-center h-[29px] text-sm font-semibold rounded-t-[4px] text-white bg-01'>
                {title}
            </h2>
            {
                isLoading ? (
                    <div className='h-[203px] flex items-center'>
                        로딩중...
                    </div>
                ) : (
                    minItems ? (
                        <RentalList>
                            {
                                minItems?.map((rental, i) => (
                                    <ListItem key={`${rental?.result.rental_id}-${rental?.result.user_id}` || i} item={rental} />
                                ))
                            }
                        </RentalList>
                    ) : (
                        <RentalList>
                            {
                                Array.from({ length: 7 }, () => '').map((_, i) => (
                                    <ListItem  />
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
