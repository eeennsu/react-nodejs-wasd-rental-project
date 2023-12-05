import { type ChangeEvent, type FC, type FormEvent, type KeyboardEvent, useState } from 'react';
import { useTabsStore, useSearchStore, useToolStore } from '../../../../../zustand';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { searchTool_API } from '../../../../../api/tool/toolApis';
import useSearchTool from '../../../queries/tool/useSearchTool';
import { message } from 'antd';
import Spinner from '../../../../../components/Spinner';

const Search: FC = () => {

    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [isSearching, setIsSearching] = useState<boolean>();

    const { curPage, setTotal } = useToolStore(state => ({
        curPage: state.curPage,
        setTotal: state.setTotal
    }), shallow);
   
    const { searchTerm, searchedResults, setSearchTerm, setSearchedResults } = useSearchStore(state => ({
        searchTerm: state.searchTerm,
        searchedResults: state.searchedResults,
        setSearchTerm: state.setSearchTerm,
        setSearchedResults: state.setSearchedResults
    }), shallow);
    // const setActiveTab = useTabsStore(state => state.setActiveTab);
    
    // const { data, isError, isFetching, error } = useSearchTool(searchTerm, curPage, isSubmit);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }      

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (searchTerm.length <= 0) {
            message.warning('검색어를 한글자 이상 입력해주세요.');
        }

        fetchSearch();
    }

    const fetchSearch = async () => {
        try {
            setIsSearching(true);
            const { data } = await searchTool_API(searchTerm, curPage)
            
            if (data) {
                console.log('data', data);
                setSearchedResults(data.result);
                setTotal(data.total);
                setIsSearched(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSearching(false);
        }
    }

    useEffect(() => {
        if (isSearched && searchTerm.length >= 1 && searchedResults!.length >= 1) {
            fetchSearch();
        }
    }, [curPage, searchTerm]);

    // useEffect(() => {
    //     const getSearchedData = async () => {
    //         setIsSearching(true);
    //         const { data } = await searchTool_API(searchTerm, curPage)
            
    //         if (data) {
    //             console.log('data', data);
    //             setIsSearching(false);
    //         }
    //     }
        
    //     if (isSubmit && searchTerm.length >= 1) {
    //         getSearchedData();
    //     }
     
    // }, [searchTerm, isSubmit]);

    return (
        <form className='flex w-full border-4 border-01 md:w-auto' onSubmit={handleSearchSubmit}>
            {
                <>
                <input className={`flex-1 px-3 py-2 text-sm bg-white border-black rounded-sm outline-none w-52 hover:placeholder:text-gray-400 focus:placeholder:text-gray-400 placeholder:text-xs placeholder:text-gray-300`} value={searchTerm} onChange={handleChange} placeholder='오큘러스 / 타블렛 / 공학관 / 본관' disabled={isSearching}/>
                <button type='submit' className={`px-3.5 md:py-2 text-white md:px-7 w-[86px] bg-01 whitespace-nowrap text-sm md:text-base ${isSearching && 'brightness-75'}`} disabled={isSearching}>
                    {
                        isSearching ? (
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








    // useEffect(() => {
    //     switch(activeTab) {
    //         case 0: 
    //             if (VRsData?.length >= 1) {
    //                 const searched = VRsData.filter((vr) => vr.SKU.toString().includes(defferedSearchTerm));
    //                 setSearchedVRs(searched);
    //             }

    //             break;
                
    //         case 1:
    //             if (tabletsData?.length >= 1) {
    //                 const searched = tabletsData.filter((tablet) => tablet.SKU.toString().includes(defferedSearchTerm));
    //                 setSearchedTablets(searched);
    //             }
                
    //             break;

    //         case 2: 
    //             if (lectureRoomsData?.length >= 1) {
    //                 const searched = lectureRoomsData.filter((room) => room.name.includes(defferedSearchTerm));
    //                 setSearchedLectureRooms(searched);
    //             }
              
    //             break;

    //         default:
    //             throw new Error(`${activeTab} is not defined.`);
    //     }

    //     if (defferedSearchTerm?.length === 0) {
    //         switch(activeTab) {             
    //             case 0:
    //                 setSearchedVRs(null);
    //                 break;

    //             case 1:
    //                 setSearchedTablets(null);
    //                 break;
                
    //             case 2:
    //                 setSearchedLectureRooms(null);
    //                 break;

    //             default:
    //                 throw new Error(`${activeTab} is not defined.`);          
    //         }
    //     }        

    // }, [defferedSearchTerm, activeTab, setVRsData, setTabletsData, setLectureRoomsData]);
