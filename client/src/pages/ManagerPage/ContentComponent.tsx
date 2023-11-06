import React, { useState } from 'react';
import type { FC } from 'react';
import MyInfoComponent from './MyInfoComponent';
import RentalListComponent from './RentalListComponent';
import RentalLogComponent from './RentalLogComponent';
import EquipmentStatusComponent from './EquipmentStatusComponent';
import RepairRequestComponent from './RepairRequestComponen';
import AddEquipmentComponent from './AddEquipmentComponent';
import ApprovalComponent from './ApprovalComponent';

const ContentComponent: FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('내 정보'); // 초기 페이지 설정

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="text-center">
      {/* 현재 페이지에 따라 다른 컴포넌트를 렌더링 */}
      {currentPage === '내 정보' && <MyInfoComponent />}
      {currentPage === '대여 목록' && <RentalListComponent />}
      {currentPage === '대여 로그' && <RentalLogComponent />}
      {currentPage === '기자재 현황' && <EquipmentStatusComponent />}
      {currentPage === '기자재 수리 요청' && <RepairRequestComponent />}
      {currentPage === '기자재 추가' && <AddEquipmentComponent />}
      {currentPage === '회원가입 승인' && <ApprovalComponent />}
      {/* 다른 페이지 컴포넌트 추가 */}
    </div>
  );
};

export default ContentComponent;