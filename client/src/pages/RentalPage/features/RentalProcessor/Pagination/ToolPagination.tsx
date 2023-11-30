import type { FC } from 'react';
import Pagination from '../../../../../components/Pagination/Pagination';
import { useToolStore } from '../../../../../zustand';
import { shallow } from 'zustand/shallow';

const ToolPagination: FC = () => {

    const { 
        curPage, setCurPage,
        total, 
    } = useToolStore(state => ({
        curPage: state.curPage, setCurPage: state.setCurPage,
        total: state.total,
    }), shallow);
    
    return (
        <Pagination curPage={curPage} setCurPage={setCurPage} total={total} />
    );
};

export default ToolPagination;