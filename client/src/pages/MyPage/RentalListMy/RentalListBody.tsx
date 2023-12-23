import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

interface RentalRecord {
  id: number;
  itemName: string;
  status: string;
}

const RentalListBody: FC = () => {
  const [rentalRecords, setRentalRecords] = useState<RentalRecord[]>([]);

  useEffect(() => {
    const API_ENDPOINT = 'rental/myAllRentalList/:user_id/:page/:pageLimit';

    const fetchRentalRecords = async () => {
      //... (이하 동일)
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
            <div className='w-[100px] h-[50px] ml-[20px] bg-01 rounded-md flex items-center justify-center text-white'>연장</div>
            <div className='w-[100px] h-[50px] ml-[20px] bg-01 rounded-md flex items-center justify-center text-white'>반납</div>
    </div>
  );
};

export default RentalListBody;