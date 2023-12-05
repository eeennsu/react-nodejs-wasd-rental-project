import type { FC } from 'react';
import EmptySearchResult from '../../../Search/EmptySearchResult';
import DataRow from '../teplate/DataRow';

type Props = {
    results: Tool[]
}

const SearchedDatas: FC<Props> = ({ results }) => {

    return (
        results.length >= 1 ? (
            results.map((result) => (
                <DataRow key={result.tool_id} data={result} />
            ))
        ) : (
            <EmptySearchResult />
        )
    )
};

export default SearchedDatas;