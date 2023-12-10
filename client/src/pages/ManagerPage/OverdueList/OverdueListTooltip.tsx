import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import { lateRentalList_API } from '../../../api/rental/rentalApi';

interface TooltipProps {
  showTooltip: boolean;
  toggleTooltip: () => void;
}

const OverdueListTooltip: FC<TooltipProps> = ({ showTooltip, toggleTooltip }) => {
    const [overlental, setOverlental] = useState<RentalInfo[]>([]);
    const [clickedIndexs, setClickedIndexs] = useState<number | null>(null);
  
    useEffect(() => {
      const overData = async () => {
        try {
          const response = await lateRentalList_API();
  
          console.log(response.data);
          if (response.data.result) {
            setOverlental(response.data.result);
          } else {
            console.log('연체된 유저가 없음');
            console.log(response.data.msg);
          }
        } catch (err) {
          console.error('데이터 불러오기 실패:', err);
        }
      };
  
      overData();
    }, []);
  
    const handleOnClick = (index: number) => {
        toggleTooltip(); // toggleTooltip 함수를 상태 변경 전에 호출
        setClickedIndexs(index === clickedIndexs ? null : index);
      };
  
    return (
      <div>
        <div className="w-[400px] h-[560px] space-y-4 left-37 rounded-8 bg-02 p-4 pl-10 rounded-b-lg">
          {overlental.map((overlental, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <div
                className={`w-80 h-11 top-91 bg-03 rounded-md text-[18px] p-1 ${
                  showTooltip && clickedIndexs === index ? 'bg-[#3F5D7D]' : ''
                }`}
                onClick={() => handleOnClick(index)}
              >
                기자재 대여 목록
              </div>
              {showTooltip && clickedIndexs === index && (
                <div className="fixed w-[300px] h-[76px] absolute mt-[-100px] left-[300px] z-[999] p-4 bg-gray-200 rounded shadow-md text-sm">
                  <div>
                    <p>기자재 이름: 이름</p>
                    <p>대여자 정보: {overlental.user_id}</p>

                    {/* 수정해야함 */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OverdueListTooltip;