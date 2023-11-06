import type { FC } from 'react';
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';

import MyInfoComponent from './MyInfoComponent';
import RentalListComponent from './RentalListComponent';
import RentalLogComponent from './RentalLogComponent';
import EquipmentStatusComponent from './EquipmentStatusComponent';
import RepairRequestComponent from './RepairRequestComponen';
import AddEquipmentComponent from './AddEquipmentComponent';
import ApprovalComponent from './ApprovalComponent';



const Button_m: FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('내 정보');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
        <div>
     <NavigationBar currentPage={currentPage} onPageChange={handlePageChange} />
        <div className="text-center">
                  {/* 현재 페이지에 따라 다른 컴포넌트를 렌더링 */}
        {currentPage === '내 정보' && <MyInfoComponent />}
        {currentPage === '대여 목록' && <RentalListComponent />}
        {currentPage === '대여 로그' && <RentalLogComponent />}
        {currentPage === '기자재 현황' && <EquipmentStatusComponent />}
        {currentPage === '기자재 수리 요청' && <RepairRequestComponent />}
        {currentPage === '기가재 추가' && <AddEquipmentComponent />}
        {currentPage === '회원가입 승인' && <ApprovalComponent />}
        </div>
      </div>
      
    );
  };

export default Button_m;