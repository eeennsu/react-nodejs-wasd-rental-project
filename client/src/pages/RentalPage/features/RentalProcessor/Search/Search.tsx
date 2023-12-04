import { type ChangeEvent, type FC, type FormEvent, type KeyboardEvent, useState } from 'react';
import { useTabsStore, useSearchStore, useToolStore } from '../../../../../zustand';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { searchTool_API } from '../../../../../api/tool/toolApis';
import useSearchTool from '../../../queries/tool/useSearchTool';

const Search: FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    
    const curPage = useToolStore(state => state.curPage);

    const setSearchedResults= useSearchStore(state => state.setSearchedResults);
    
    const { data, isLoading, error } = useSearchTool(searchTerm, curPage, isSubmit);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        
        if (isSubmit) {
            setIsSubmit(false);
        }
    }      

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);       
    }

    useEffect(() => {
        if (isSubmit && data && data.result) {
            setSearchedResults(data.result);

            console.log('여기', data.result);
        }
    }, [isSubmit, data]);
    
    return (
        <form className='flex w-full border-4 border-01 md:w-auto' onSubmit={handleSearchSubmit}>
            <input className='flex-1 px-3 py-2 text-sm bg-white border-black rounded-sm outline-none w-52 placeholder:text-sm placeholder:text-gray-300' value={searchTerm} onChange={handleChange} 
            placeholder='검색어를 입력해 주세요'/>
            <button type='submit' className='px-3.5 md:py-2 text-white md:px-7 bg-01 whitespace-nowrap text-sm md:text-base'>
                검색
            </button>          
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
