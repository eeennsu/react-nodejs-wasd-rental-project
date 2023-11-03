import type { FC } from 'react';

const Button_m: FC = () => {
    return (
        <div className="flex justify-start h-full"> {/* items-center 제거 */}
            <div className="p-4 border border-gray-300 rounded-lg">
                <div className="text-2xl"> 
                    <div>내 정보</div>
                    <div>대여 목록</div>
                    <div>대여 로그</div>
                    <div>기자재 현황</div>
                    <div>기자재 수리 요청</div>
                    <div>기가재 추가</div>
                    <div>회원가입 승인</div>
                </div>
            </div>
        </div>
    );
};

export default Button_m;