import type { FC } from 'react';
import { useState } from 'react';
import Table from './Table/Table'
import Loading from '../../../../../components/Loading';
import Pagination from '../Pagination/Pagination';
import Tabs from './Tabs/Tabs';

const Supplies: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const fetch = async () => {
    //         const response = await userTableAll_API();
            
    //         console.log(response.data);
    //     }

    //     fetch();

    //     setIsLoading(false);
    // }, []);

    return (
        <>
            <div className='flex flex-col min-h-[520px] 3xl:min-h-[526px] gap-7'>
                <Tabs />
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <Table /> 
                    )
                }         
            </div>
            <div className='flex justify-center w-full my-6'>                
                <Pagination />            
            </div>   
        </> 
    );
};

export default Supplies;