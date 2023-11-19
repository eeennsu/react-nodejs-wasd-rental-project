import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManagerToolStatus: FC = () => {

    // useEffect(()=>{

    //     const viewTools = async () => {
    //         const response = await viewTools({
    //             tool_id: string;
    //             tool_division: string;
    //             tool_code: "5001",
    //             tool_name: "VR 실습기기",
    //             tool_purchase_division: "교비(등록금)",
    //             tool_purchase_date: "20221024",
    //             tool_standard: "Qculus Quest2 128GB",
    //             tool_state: "대여가능",
    //             tool_update_at: "2023-11-11T00:00:00.000Z",
    //             tool_content: "오큘러스 퀘스트2 11번 기기",
    //             tool_spec: "기자재 사양",
    //             department_id: 1


    //         });
    //     } 
    // })

    // 아래 주석 처리된 Link 컴포넌트를 링크 다고 싶은곳에서 가져다 쓰면 됨
    return (
        <div className='flex items-center justify-center w-[1400px] h-[700px] mr-[30px] mt-[20px] bg-02'>
            ManagerToolStatus
        </div>
    );
};

export default ManagerToolStatus;