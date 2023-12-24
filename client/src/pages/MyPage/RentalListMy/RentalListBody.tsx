import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import { useUserStore } from '../../../zustand';
import type { FC } from 'react';
import { myAllRentalList_API_MY_PAGE } from '../../../api/rental/rentalApi';
import Pagination from '../../../components/Pagination/Pagination';
import { getToolNum } from '../../RentalPage/utils/getToolNum';

// 이거 말고 따로 정의된 타입이 있음. RentalInfo 라고 이거 배열 쓰면 됨.
// interface RentalRecord {
//   id: number;
//   itemName: string;
//   status: string;
// }

const RentalListBody: FC = () => {
  const [rentalRecords, setRentalRecords] = useState<RentalInfo[]>([]);
  const [curPage, setCurPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const { user } = useUserStore();

  useEffect(() => {
    const fetchRentalRecords = async () => {
      try {
        const { data } =  await myAllRentalList_API_MY_PAGE(user!.user_id, curPage);

        console.log(data);

        if (data.result && data.total) {
          setRentalRecords(data.result);
          setTotal(data.total);
      
        } 
      } catch (error) {
        console.log(error);
        alert('유저의 역대 대여 목록을 가져오는데 실패했습니다!');
      }
    };

    fetchRentalRecords(); 
  }, [curPage]);

  return (
    <>
      <div className='w-[1140px] h-[600px] bg-02 ml-[10px] mr-[200px] mt-[400px] rounded-md flex flex-col items-center justify-center'>
      {/* 대여 기록 목록을 매핑하여 표시합니다. */}
      {/* {rentalRecords.map((record) => (
        <div key={record.rental_id} className='w-[700px] h-[50px] ml-[10px] bg-03 rounded-md flex items-center justify-center'>
          {`${record.tool.tool_content}번/${record.itemName}/${record.status}`}
        </div>
      ))} */}

            {/* <div className='w-[700px] h-[50px] ml-[10px] bg-03 rounded-md flex items-center justify-center'>14번/오큘러스/대여중</div>
            <div className='w-[100px] h-[50px] ml-[20px] bg-01 rounded-md flex items-center justify-center text-white'>연장</div>
            <div className='w-[100px] h-[50px] ml-[20px] bg-01 rounded-md flex items-center justify-center text-white'>반납</div> */}

        {
          rentalRecords?.map((record) => (
            <div key={record.rental_id} className='w-[700px] h-[50px] ml-[10px] bg-03 rounded-md flex items-center justify-center'>
              {`${getToolNum(record.tool)}/${record.tool.tool_name}/${record.tool.tool_state}`}
            </div>
          ))
        }
      </div>
      <Pagination curPage={curPage} setCurPage={setCurPage} total={30} />
    </>
  );
};

export default RentalListBody;