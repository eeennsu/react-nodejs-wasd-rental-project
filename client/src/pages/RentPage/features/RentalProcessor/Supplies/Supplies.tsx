import type { FC } from 'react';
import Table from './Table/Table'
import Pagination from '../Pagination/Pagination';
import Tabs from './Tabs/Tabs';

const Supplies: FC = () => {

    return (
        <>
            <div className='flex flex-col min-h-[520px] 3xl:min-h-[526px] gap-7'>
                <Tabs />
                <Table />      
            </div>
            <div className='flex justify-center w-full my-6'>                
                <Pagination />            
            </div>   
        </> 
    );
};

export default Supplies;