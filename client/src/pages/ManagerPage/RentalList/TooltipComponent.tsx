import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useUserStore } from '../../../zustand';
import { viewRental_API } from '../../../api/rental/rentalApi';

interface TooltipProps {
  showTooltip: boolean;
  toggleTooltip: () => void;
}

const TooltipComponent: FC<TooltipProps> = ({ showTooltip, toggleTooltip }) => {
  const [rentallist, setRentalList] = useState<ViewTool[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await viewRental_API();

        console.log(response.data);
        if (response.data.result) {
          setRentalList(response.data.result);
        } else {
          console.log('대여를 한 유저가 없음');
        }
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      }
    };

    fetchData();
  }, []);

  const handleOnClick = (index: number) => {
    toggleTooltip();
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div>
      <div className="w-[400px] h-[560px] space-y-4 rounded-8 bg-02 p-4 pl-10 rounded-b-lg relative ">
        {rentallist.map((rentallis, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <div
              className={`w-80 h-11 top-91 bg-03 rounded-md text-[18px] p-1 ${
                showTooltip && clickedIndex === index ? 'bg-[#3F5D7D]' : ''
              }`}
              onClick={() => handleOnClick(index)}
            >
              기자재 대여 목록
            </div>
            {showTooltip && clickedIndex === index && (
              <div className="fixed w-[300px] h-[76px] absolute mt-[-100px] left-[300px] z-[999] p-4 bg-gray-200 rounded shadow-md text-sm">
                <div>
                  <p>기자재 이름: {rentallis.tool_content}</p>
                  <p>대여자 정보: {rentallis.tool_id}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TooltipComponent;