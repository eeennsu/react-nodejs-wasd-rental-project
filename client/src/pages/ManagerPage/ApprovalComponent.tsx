import type { FC } from 'react';
import React from 'react';
import Button from '../../components/Button';


const ApprovalComponent : FC = () =>{

  const applicants = [
    { id: 1, 학번: '2021001', 이름: '홍길동', 날짜: '2023-11-09' },
    { id: 2, 학번: '2021002', 이름: '김철수', 날짜: '2023-11-10' },
    { id: 3, 학번: '2021003', 이름: '이영희', 날짜: '2023-11-11' },
    { id: 4, 학번: '2021004', 이름: '박영수', 날짜: '2023-11-12' },
    { id: 5, 학번: '2021005', 이름: '박영수', 날짜: '2023-11-12' },
    { id: 6, 학번: '2021006', 이름: '박영수', 날짜: '2023-11-12' },
    { id: 7, 학번: '2021007', 이름: '박영수', 날짜: '2023-11-12' },
    { id: 8, 학번: '2021008', 이름: '박영수', 날짜: '2023-11-12' },


  ];

  return (
    <table className="overflow-y-auto w-[830px] h-52 absolute top-[140px] ml-[390px] bg-02 rounded-md">
      <thead>

      </thead>
      <tbody>
        {applicants.slice(0, 4).map((applicant, index) => (
          <React.Fragment key={applicant.id}>
            <tr>
              <td>{applicant.학번}</td>
              <td>{applicant.이름}</td>
              <td>{applicant.날짜}</td>
              <td>
                <button>승인</button>
              </td>
            </tr>
            {/* 가로 선을 추가 */}
            {index < 3 && (
              <tr key={`line-${index}`}>
                <td colSpan={4} className="border-b border-gray-300"></td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};




export default ApprovalComponent;