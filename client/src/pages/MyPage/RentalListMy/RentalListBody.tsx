import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import { useUserStore } from '../../../zustand';
import type { FC } from 'react';

interface RentalRecord {
  id: number;
  itemName: string;
  status: string;
}

const RentalListBody: FC = () => {
  const { user } = useUserStore();
  const [rentalRecords, setRentalRecords] = useState<RentalRecord[]>([]);

  useEffect(() => {
    const API_ENDPOINT = 'myAllRentalList_API_MY_PAGE';

    const fetchRentalRecords = async () => {
    };

    fetchRentalRecords(); 
  }, []);

  return (
    <div className='w-[1140px] h-[600px] bg-02 ml-[10px] mr-[200px] mt-[400px] rounded-md flex items-center justify-center'>
      {/* 대여 기록 목록을 매핑하여 표시합니다. */}
      {rentalRecords.map((record) => (
        <div key={record.id} className='w-[700px] h-[50px] ml-[10px] bg-03 rounded-md flex items-center justify-center'>
          {`${record.id}번/${record.itemName}/${record.status}`}
        </div>
      ))}

            <div className='w-[700px] h-[50px] ml-[10px] bg-03 rounded-md flex items-center justify-center'>14번/오큘러스/대여중</div>

            <Button bgColor='01'className='w-[100px] h-[50px] ml-[20px] rounded-md flex items-center justify-center text-white'>연장</Button>
            <Button bgColor='01'className='w-[100px] h-[50px] ml-[20px] rounded-md flex items-center justify-center text-white'>반납</Button>

    </div>
  );
};

export default RentalListBody;