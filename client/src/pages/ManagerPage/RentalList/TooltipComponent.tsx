import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useUserStore } from '../../../zustand';
import { viewRental_API } from '../../../api/rental/rentalApi'

interface TooltipProps {
  showTooltip: boolean;
  toggleTooltip: () => void;
}

const TooltipComponent: FC<TooltipProps> = ({ showTooltip, toggleTooltip }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    toggleTooltip();
    setIsClicked(!isClicked);
  };




  // 이름과 기자재 정보만을 가지는 배열 생성
// const tooltipData = test.map(({ id,이름, 기자재 }) => ({ id, 이름, 기자재 }));


const [rentallist, setRentalList] = useState<ViewTool[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await viewRental_API();


      // console.log(response.data); 
      // 받아온 데이터를 상태에 업데이트
      if (response.data.result) {
        setRentalList(response.data.result);      // 이 api의 결과는 200, result, msg 라는 속성이 들어있는 객체가 오고, 우리가 원하는 값은 result에 담겨져 있음. 이런것들은 함수를 컨트롤 클릭해서 어떤 값의 형태가 들어오는지 확인해줘야함.        
      } else {
        // 이곳은 대여중인 기자재가 하나도 없을때 여기 로직 실행
      }
    } catch (err) {
      console.error('데이터 불러오기 실패:', err);
    }
  };

  fetchData();
}, []); 

  return (

    <div>

   
    <div className="w-[400px] h-[560px] space-y-4  rounded-8 bg-02 p-4 pl-10 rounded-b-lg relative">
      <div
        className={`w-80 h-11 top-91 bg-03 rounded-md text-[18px] p-1 ${isClicked ? 'bg-01' : ''}`}
        onClick={handleOnClick}
      >
        기자재 대여 목록
      </div>
      {showTooltip && (
        <div className="w-[180px] h-[76px] absolute top-[-50px] left-[300px] z-[99] p-4 bg-gray-200 rounded shadow-md text-sm">
         {/* {tooltipData.map(({id, 이름, 기자재}) =>( */}
          <div>
            <p>기자재 이름: 이름 </p>
            <p>대여자 정보: 이름</p>
             </div>
         {/* )
         )} */}
        </div>
      )}
      
    </div>
    </div>

    
    
  );
};

export default TooltipComponent;





