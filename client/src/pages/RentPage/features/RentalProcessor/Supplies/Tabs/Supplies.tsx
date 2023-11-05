import type { FC } from 'react';



import Table from '../Table/Table'
import Loading from '../../../../../../components/Loading';
import Pagination from '../../Pagination/Pagination';
import Tabs from './Tabs';

type Props = {
    isAnyoneLoading: boolean;
}

const Supplies: FC<Props> = ({ isAnyoneLoading }) => {

    return (
        <div className='flex flex-col h-full gap-5'>
            <Tabs />
            {
                isAnyoneLoading ? (
                    <Loading />
                ) : (
                    <Table /> 
                )
            }         
            <div className='flex justify-center w-full mt-5'>                
                <Pagination />            
            </div>      
        </div>
    );
};

export default Supplies;