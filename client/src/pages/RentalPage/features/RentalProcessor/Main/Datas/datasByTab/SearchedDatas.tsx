import type { FC } from 'react';
import { messages } from '../../../../../constants';
import EmptryResult from '../../../Search/EmptryResult';
import DataRow from '../teplate/DataRow';

type Props = {
    results: Tool[];
}

const SearchedDatas: FC<Props> = ({ results }) => {

    return (
        results.length >= 1 ? (
            results.map((result) => (
                <DataRow key={result.tool_id} data={result} />
            ))
        ) : (
            <EmptryResult msg={messages.noSearch} />
        )
    )
};

export default SearchedDatas;