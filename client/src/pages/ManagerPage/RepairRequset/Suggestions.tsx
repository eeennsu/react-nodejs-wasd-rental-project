import React, { FC, useState, useEffect } from 'react';
import ModalComponent from './ModalComponent';
import { notRepairList_API, myRepairView_API } from '../../../api/repair/repairApi';
import Pagination from '../../../components/Pagination/Pagination';

const Suggestions: FC = () => {
  const [curPage, setCurPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<RepairInfo[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const response = await notRepairList_API(page);
        const result = response.data.result;

        console.log(response.data);

        if (Array.isArray(result)) {
          console.log(result, '받아온 데이터');
          setSuggestions(result);
          //setTotal(); // 배열의 길이로 전체 아이템 수 계산
        } else {
          console.error('데이터가 배열이 아닙니다.');
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(curPage);
  }, [curPage]);

  const handleSuggestions = async (user_id: string, repair_id: number) => {
    openModal();
    const response = await myRepairView_API(user_id, repair_id);
    const results = response.data.result;
    console.log(results, '된다?adasdas');
  };  

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
  };
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
            className='flex w-[1020px] h-[80px] bg-03 ml-[35px] rounded-md cursor-pointer text-[18px] p-1'
          >
            <h3 className="w-full ml-[100px] mt-[20px] font-bold">{suggestion.repair_reason}</h3>
            <div className='w-1/2 ml-[300px] mt-[20px]'>{suggestion.user_id}</div>
            <div className='w-1/2 ml-[10px] mt-[20px]'>{ formatDate(suggestion.repair_create_at)}</div>
          </div>
        ))}
      </div>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
      
      <Pagination curPage={curPage} setCurPage={setCurPage} total={24}/>
    </div>
  );


};

export default Suggestions;