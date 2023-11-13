import type { FC } from 'react';
import { Link } from 'react-router-dom';

const ManagerToolStatus: FC = () => {

    // 아래 주석 처리된 Link 컴포넌트를 링크 다고 싶은곳에서 가져다 쓰면 됨
    return (
        <div>
            {/* <Link to='/manager/tool-status'>
                기자재 관리 현황 버튼 가기
            </Link> */}
            ManagerToolStatus
        </div>
    );
};

export default ManagerToolStatus;