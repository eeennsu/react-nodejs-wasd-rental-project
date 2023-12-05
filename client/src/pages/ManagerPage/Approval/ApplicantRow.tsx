import type { FC } from 'react';
import Button from '../../../components/Button';

interface ApplicantProps {
  학번: string;
  이름: string;
  날짜: string;
  onApprove: () => void;
}

const ApplicantRow: FC<ApplicantProps> = ({ 학번, 이름, 날짜, onApprove }) => (
  <>
    <tr>
      <td className="text-center">{학번}</td>
      <td className="text-center">{이름}</td>
      <td className="text-center">{날짜}</td>
      <td className="text-center">
        <Button bgColor="01" className="w-[10px] h-[30px]" onClick={onApprove}>
          승인
        </Button>
      </td>
    </tr>
    {/* 가로 선을 추가 */}
    <tr>
      <td colSpan={4} className="border-b border-gray-300"></td>
    </tr>
  </>
);

export default ApplicantRow;