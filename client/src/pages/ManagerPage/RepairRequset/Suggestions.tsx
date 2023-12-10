import type { FC } from 'react';
import ModalComponent from './ModalComponent';
import React, { useState, useEffect} from 'react';
import { notRepairList_API, myRepairView_API } from '../../../api/repair/repairApi'
import Pagination from '../../../components/Pagination/Pagination';




const Suggestions: FC = () => {

  const [curPage, setCurPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };


    const [suggestions, setSuggestions] = useState<RepairInfo[]>([]);       
    // 서버의 response 를 보면, result 속성안에 값이 있고, result의 타입은 RepairInfo 타입의 배열임.

    useEffect(() => {
      const fetchData = async ( page: number ) => {
        try {
          const response = await notRepairList_API( page );
          const result = response.data.result;

          console.log(response.data)
  
          if (Array.isArray(result)) {
            console.log(result, '받아온 데이터');
            setSuggestions(result);
          } else {
            console.error('데이터가 배열이 아닙니다.');
          }
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(1);
    }, []);


    const handleSuggestions = async ( user_id: string, repair_id: number ) => {

        await myRepairView_API( user_id, repair_id );

        console.log(handleSuggestions,'된다?')

    
    }

    

    return (

      
      <div className="w-[1180px] h-[60px] absolute top-[120px] bg-01 rounded-t-lg rounded-tr-lg text-2xl text-center">
        <div className='p-3 font-bold -ml-[900px] text-[25px] text-white'>
          기자재 건의사항
        </div>
        <div className="w-[1180px] h-[820px] space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestions(suggestion.user_id, suggestion.repair_id)}
              className='flex w-[1020px] h-[80px] bg-03 ml-[35px] rounded-md text-[18px] p-1'
            >
              <h3 className="ml-[30px] mt-[20px] font-bold">{suggestion.repair_reason}</h3>
              <div className='ml-[550px] mt-[20px]'>{suggestion.user_id}</div>
              <div className='ml-[10px] mt-[20px]'>{suggestion.repair_create_at}</div>
            </div>
          ))}
        </div>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
        
        <Pagination curPage={curPage} setCurPage={setCurPage} total={total}/>
      </div>
    );


  };

  export default Suggestions;