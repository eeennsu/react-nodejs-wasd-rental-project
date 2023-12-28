import type { FC, ReactNode } from 'react';
import { Pagination as AntdPagination } from 'antd';
import PaginationButton from './PaginationButton';

type Props = {
    curPage: number;                                    // 현재 페이지
    setCurPage: (curPage: number) => void;              // 페이지 변경하는 함수 (매개변수에는 변경할 페이지를 넣어주면 됨)
    total: number;                                      // 전체 페이지
}

const Pagination: FC<Props> = ({ curPage, total, setCurPage }) => {

    const itemRender = (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: ReactNode): ReactNode => {
        if (type === 'page') {
            return (
                <PaginationButton curPage={curPage}>
                    {page}
                </PaginationButton>
            );
        }

        return element;
    }

    const handleCurPageChange = (page: number) => {
        setCurPage(page);
    }

    return (
        <AntdPagination 
            defaultCurrent={1}
            current={curPage}
            onChange={handleCurPageChange} 
            total={total}
            itemRender={itemRender}  
            showLessItems
        />      
    );
}

export default Pagination;