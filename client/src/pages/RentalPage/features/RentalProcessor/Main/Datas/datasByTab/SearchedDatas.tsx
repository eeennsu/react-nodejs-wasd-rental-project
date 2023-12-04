import type { FC } from 'react';
import EmptySearchResult from '../../../Search/EmptySearchResult';
import DataRow from '../teplate/DataRow';

type Props = {
    results: Tool[]
}

const SearchedDatas: FC<Props> = ({ results }) => {
    console.log('results', results);
    return (
        results.length >= 2 ? (
            results.map((result, i) => (
                <DataRow key={result.tool_id} data={result} />
            ))
        ) : (
            <EmptySearchResult />
        )
    )
};

export default SearchedDatas;