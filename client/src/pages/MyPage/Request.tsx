import type { FC } from 'react';
//import Button from '../../../components/Button';
import Button from '../../components/Button';

interface ApplicantProps {
  건의제목: string;
  onApprove: () => void;
  날짜 : string;
}

const ApplicantRow: FC<ApplicantProps> = ({ 건의제목, 날짜, onApprove }) => (
  <>
    <tr>
      <td className="text-center">{건의제목}</td>
      <td className="text-center">
        <Button bgColor="01" className="w-[10px] h-[30px]" onClick={onApprove}>
          승인
        </Button>
      </td>
      <td className="text-center">{날짜}</td>
    </tr>
    {/* 가로 선을 추가 */}
    <tr>
      <td colSpan={4} className="border-b border-gray-300"></td>
    </tr>
  </>
);

export default ApplicantRow;