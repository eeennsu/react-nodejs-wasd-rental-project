import type { FC, ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useTabsStore, useSearchStore, useToolStore } from '../../../../../zustand';
import { shallow } from 'zustand/shallow';
import { searchTool_API } from '../../../../../api/tool/toolApi';
import { message } from 'antd';
import Spinner from '../../../../../components/Spinner';

const Search: FC = () => {

    const [isNewSearch, setIsNewSearch] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [searchedTerm, setSearchedTerm] = useState<string>('');

    const { curPage, setCurPage, setTotal } = useToolStore(state => ({
        curPage: state.curPage,
        setCurPage: state.setCurPage,
        setTotal: state.setTotal
    }), shallow);
   
    const { searchTerm, searchedResults, setSearchTerm, setSearchedResults } = useSearchStore(state => ({
        searchTerm: state.searchTerm,
        searchedResults: state.searchedResults,
        setSearchTerm: state.setSearchTerm,
        setSearchedResults: state.setSearchedResults
    }), shallow);
    
    const setActiveTab = useTabsStore(state => state.setActiveTab);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }      

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (searchTerm.length <= 0) {
            message.warning('검색어를 한글자 이상 입력해주세요.');
        }

        fetchSearch(true);
    }

    const fetchSearch = async (init: boolean) => {
        setIsLoading(true);
        setIsNewSearch(init);
        
        try {                
            const term = init ? searchTerm : searchedTerm;
            const page = init ? 1 : curPage;
            const { data } = await searchTool_API(term, page);
            
            if (data) {
                setSearchedResults(data.result);
                setTotal(data.total);
                setActiveTab(4);        
                setSearchedTerm(term);       
                init && setCurPage(1);
            } else {
                message.error('검색에 실패하였습니다. 관리자에게 문의해 주세요.');
            }
        } catch (error) {
            console.log(error);
            message.error('알 수 없는 에러가 발생했습니다. 괸라자에게 문의해 주세요');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {        
        if (searchedResults && searchedResults.length >= 1) {
            if ((searchTerm === searchedTerm) || (!isNewSearch && searchTerm !== searchedTerm)) {
                fetchSearch(false);
            } else if (isNewSearch) {
                return;
            } 
        }
    }, [curPage]);

    return (
        <form className='flex w-full border-4 border-01 md:w-auto' onSubmit={handleSearchSubmit}>
            {
                <>
                    <input className={`flex-1 px-3 py-2 text-sm bg-white border-black rounded-sm outline-none w-52 hover:placeholder:text-gray-400 focus:placeholder:text-gray-400 placeholder:text-xs placeholder:text-gray-300`} value={searchTerm} onChange={handleChange} placeholder='오큘러스 / 타블렛 / 공학관 / 본관' disabled={isLoading}/>
                    <button type='submit' className={`px-3.5 md:py-2 text-white md:px-7 w-[86px] bg-01 whitespace-nowrap text-sm md:text-base ${isLoading && 'brightness-75'}`} disabled={isLoading}>
                        {
                            isLoading ? (
                                <Spinner />
                            ) : '검색'
                        }
                    </button>     
                </>
            }     
        </form>
    );
};

export default Search;