import type { FC } from 'react';

const EmptySearchResult: FC = () => {



    return (
        <tr>
            <td colSpan={3}>
                검색 결과가 없습니다.
            </td>        
        </tr>
    );
};

export default EmptySearchResult;