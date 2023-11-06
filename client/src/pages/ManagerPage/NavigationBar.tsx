import React, { FC } from 'react';

interface NavigationBarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const NavigationBar: FC<NavigationBarProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="-mx-96">
      <div>
        {/* 페이지 변경 버튼들 */}
        <div onClick={() => onPageChange('내 정보')}>내 정보</div>
        <div onClick={() => onPageChange('대여 목록')}>대여 목록</div>
        <div onClick={() => onPageChange('대여 로그')}>대여 로그</div>
        <div onClick={() => onPageChange('기자재 현황')}>기자재 현황</div>
        <div onClick={() => onPageChange('기자재 수리 요청')}>기자재 수리 요청</div>
        <div onClick={() => onPageChange('기가재 추가')}>기가재 추가</div>
        <div onClick={() => onPageChange('회원가입 승인')}>회원가입 승인</div>
        {/* 나머지 페이지 버튼들 추가 */}
      </div>
    </div>
  );
};

export default NavigationBar;