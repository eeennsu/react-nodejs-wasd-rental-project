import type { FC } from 'react';
import ToolPagination from '../Pagination/ToolPagination';
import Tabs from './Tabs/Tabs';
import Datas from './Datas/Datas';

const Main: FC = () => {

    return (
        <>
            <div className='flex flex-col min-h-[520px] 3xl:min-h-[570px] gap-8'>
                <Tabs />
                <Datas />    
            </div>
            <div className='flex justify-center w-full my-14'>                
                <ToolPagination />            
            </div>   
        </> 
    );
};

export default Main;